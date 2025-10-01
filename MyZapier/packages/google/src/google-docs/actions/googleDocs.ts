import { oauth2Client } from "../../auth-client/oauthClient";
import { google } from "googleapis";
import { prismaClient as client } from "@repo/db"

export async function appendToGoogleDocs(userId : any,documentId : any,text : any){
    
  const googleAuth : any = await client.user.findFirst({select:{googleAuth:true},where:{id : userId}});
  console.log("hello");
  console.log("google Auth Tojjens",googleAuth);
  if(!googleAuth) return;
  let googleAuthToken ;
  googleAuth.googleAuth.map((g:any)=>{
      googleAuthToken =JSON.parse(g.allTokens) ;
      console.log("htt",JSON.parse(g.allTokens));
      console.log("set successfully");
  })
  
    console.log("token at trigger",googleAuthToken);
        
    if (!googleAuthToken) return;
  
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
