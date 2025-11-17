import { prismaClient as client } from "@repo/db"
import { oauth2Client } from "../../auth-client/oauthClient";
import { google } from "googleapis";


export async function sendEmail(userId : number, data : any){
    // send email with data
    const {to,subject,body,addSignature,labelId} = data;

    const authData : any = await client.user.findMany({
        select : { googleAuth : true },
        where : { id : userId }
    });

    if(!authData || !authData.googleAuth[0]) return;

    let googleAuthToken;

    let googleAuthInfo = authData.googleAuth[0];
    googleAuthToken = googleAuthInfo.allTokens;

    if(!googleAuthToken) return;

    oauth2Client.setCredentials(googleAuthToken);

    try{
        const gmail = google.gmail({ version : "v1", auth : oauth2Client});

        // build the body
        let finalBody = body;
        
        if(addSignature){
            finalBody += `\n\n--\nSent via ${process.env.APP_NAME || "Om's Zapier App"}`;            
        }

        // raw email setup
        const encodedMessage = Buffer.from(
            `To: ${to}\r\n` +
            `Subject: ${subject}\r\n` +
            `Content-Type: text/plain; charset="UTF-8"\r\n\r\n` +
            `${finalBody}`
        ).toString("base64")
         .replace(/\+/g, "-")
         .replace(/\//g, "_")
         .replace(/=+$/, "");

      // finally sending
      const sent = await gmail.users.messages.send({
        userId : "me",
        requestBody : {raw : encodedMessage},
      });


    const messageId = sent.data.id;

    // Apply label (if user selected)
    if (labelId && messageId) {
      await gmail.users.messages.modify({
        userId: "me",
        id: messageId,
        requestBody: {
          addLabelIds: [labelId],
        },
      });
    };

    return { success: true };
    
    }catch(error){
        console.error("Gmail Send Error:", error);
        return { success: false, error: error };
    }
    
}