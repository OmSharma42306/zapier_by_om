import express, { Response } from "express";
import bodyParser from "body-parser";
import { oauth2Client,getAuthUrl} from "./oauthClient";
import {prismaClient as client} from "@repo/db"
import {GoogleToken} from "./types/types"

class AuthRequest extends Request{
    userId? : Number
    
}


const app = express();
const PORT = 3003;

app.use(bodyParser.json());

// STEP 1: Initiate OAuth flow
app.get('/auth', (req, res) => {
  const url = getAuthUrl();
  res.redirect(url);
});

let tokenss : any = '';

// STEP 2: Handle OAuth2 callback
app.get('/oauth2callback', async (req:AuthRequest | any , res:Response) => {
  const { code } = req.query ;

//   const userId = req.userId;
const userId = 5;

  const { tokens } : any = await oauth2Client.getToken(code as any);
  oauth2Client.setCredentials(tokens);
  console.log("ToKens  : ",tokens)
  tokenss = tokens;
  
  // Upsert ensures that if a GoogleAuth entry exists for this user, it will be updated with the new tokens;
  //  otherwise, a new entry will be created — this keeps exactly one record per user.
  const googleAuthUser = await client.googleAuth.upsert({
    where : {userId},
    update : {
      accessToken : tokens.access_token,
      refreshToken : tokens.refresh_token,
      scope : tokens.scope,
      expiryDate : tokens.expiry_date ? new Date(tokens.expiry_date) : null,
      allTokens : tokens
    },
    create :{
      userId,
      provider : 'GoogleAuth',
      accessToken : tokens.access_token,
      refreshToken : tokens.refresh_token,
      scope : tokens.scope,
      expiryDate : tokens.expiry_date ? new Date(tokens.expiry_date) : null,
      allTokens : tokens
    }
  })
  console.log("googleAuthUser",googleAuthUser)
  
  
  res.status(200).send('✅ Authorization successful. You can now trigger the action.');
});


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`➡️  Visit http://localhost:${PORT}/auth to connect Google account`);
});
