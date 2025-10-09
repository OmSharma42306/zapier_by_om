import { oauth2Client } from "../../auth-client/oauthClient";
import { google } from "googleapis";
import { prismaClient as client } from "@repo/db"

export async function appendToGoogleDocs(userId : any,documentId : any,text : any){
    
  const googleAuth : any = await client.user.findFirst({select:{googleAuth:true},where:{id : userId}});
  console.log("hello");
  console.log("google Auth Tojjens",googleAuth);
  if(!googleAuth) return;
  console.log("hr1");
  let googleAuthToken ;
  console.log("hr2");
  // googleAuth.googleAuth.map((g:any)=>{
  //     googleAuthToken =JSON.parse(g.allTokens) ;
  //     console.log("htt",JSON.parse(g.allTokens));
  //     console.log("set successfully");
  // })
    let googleAuthInfo = googleAuth.googleAuth[0];
    // googleAuthToken = JSON.parse(googleAuthInfo.allTokens);
    googleAuthToken = googleAuthInfo.allTokens;

    console.log("f",googleAuthToken);
    console.log("token at trigger",googleAuthToken);
    console.log("return above")    
    if (!googleAuthToken) return;
    console.log("return below")
    oauth2Client.setCredentials(googleAuthToken);

  try {
    const docs = google.docs({ version: 'v1', auth: oauth2Client });
    await docs.documents.batchUpdate({
      documentId,
      requestBody: {
        requests: [
          {
            insertText: {
              location: { index: 1 },
              text: text + '\n',
            },
          },
        ],
      },
    });

    }catch(e){
        console.error(e);
    }

}
