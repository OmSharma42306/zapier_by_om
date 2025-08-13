import { oauth2Client } from "./oauthClient";
import { google } from "googleapis";

export async function appendToGoogleDocs(tokens : any,documentId : any,text : any){
    const googleAuthToken = tokens;
    console.log("hi");
    console.log("token at trigger",googleAuthToken);
    
    if (!googleAuthToken) return;
  
    oauth2Client.setCredentials(tokens);

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
