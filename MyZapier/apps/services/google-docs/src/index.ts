import express from "express";
import bodyParser from "body-parser";
import { google } from "googleapis";
import { oauth2Client,getAuthUrl} from "./oauthClient";


const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// STEP 1: Initiate OAuth flow
app.get('/auth', (req, res) => {
  const url = getAuthUrl();
  res.redirect(url);
});

let tokenss : any = '';

// STEP 2: Handle OAuth2 callback
app.get('/oauth2callback', async (req, res) => {
  const { code } = req.query;
  const { tokens } : any = await oauth2Client.getToken(code as any);
  oauth2Client.setCredentials(tokens);
  console.log("ToKens  : ",tokens)
  tokenss = tokens;
  
  res.send('✅ Authorization successful. You can now trigger the action.');
});

// STEP 3: Trigger endpoint (Zapier-style)
app.post('/trigger', async (req, res) => {
  const { documentId, text } = req.body;

const tokens = tokenss;
  console.log("token at trigger",tokens);
  if (!tokens) return res.status(403).send('User not authorized.');
  
  oauth2Client.setCredentials(tokens);


  const docs = google.docs({ version: 'v1', auth: oauth2Client });

  try {
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

    res.send('✅ Text inserted into Google Docs.');
  } catch (err) {
    console.error('Error inserting text:', err);
    res.status(500).send('❌ Failed to insert text.');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`➡️  Visit http://localhost:${PORT}/auth to connect Google account`);
});
