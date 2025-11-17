import { google } from "googleapis";
import dotenv from "dotenv";
dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const SCOPES = ['https://www.googleapis.com/auth/documents',"https://www.googleapis.com/auth/drive.metadata.readonly",
  "https://www.googleapis.com/auth/drive.readonly", // REQUIRED for sending emails
  "https://www.googleapis.com/auth/gmail.send",

  // REQUIRED because you apply labels
  "https://www.googleapis.com/auth/gmail.labels",];

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

function getAuthUrl() {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent', // ensures refresh_token is always returned
  });
}

export {
  oauth2Client,
  getAuthUrl,
};
