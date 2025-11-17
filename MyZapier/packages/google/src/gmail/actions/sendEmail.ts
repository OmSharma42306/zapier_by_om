import { prismaClient as client } from "@repo/db"
import { oauth2Client } from "../../auth-client/oauthClient";
import { google } from "googleapis";


export async function sendEmail(userId : number, data : any){
    // send email with data
    const {to,subject,body,addSignature,labelId} = data;

    console.log("i am here at gmail");
    console.log("data",data);
    console.log("userId",userId);

    const authData : any = await client.user.findMany({
        select : { googleAuth : true },
        where : { id : userId }
    });

    console.log(authData[0]);
    console.log(authData[0].googleAuth);
    

    // if(!authData || !authData.googleAuth[0]) return;
    if(!authData) return;
    console.log("pass 1");
    let googleAuthToken;

    let googleAuthInfo = authData[0].googleAuth[0];
    googleAuthToken = googleAuthInfo.allTokens;

    if(!googleAuthToken) return;
    console.log("pass 2");

    oauth2Client.setCredentials(googleAuthToken);
    console.log("all set",googleAuthToken);
    try{
        console.log("pass 3 try");
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

      console.log("sendttomg",sent);

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

    console.log("finally done!");
    return { success: true };
    
    }catch(error){
        console.error("Gmail Send Error:", error);
        return { success: false, error: error };
    }
    
}