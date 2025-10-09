import { oauth2Client } from "../../auth-client/oauthClient";
import { google } from "googleapis";
import { prismaClient as client } from "@repo/db";

export async function appendToGoogleDocs(
  userId: any,
  documentId: any,
  text: any
) {
  const googleAuth: any = await client.user.findFirst({
    select: { googleAuth: true },
    where: { id: userId },
  });

  if (!googleAuth) return;

  let googleAuthToken;

  let googleAuthInfo = googleAuth.googleAuth[0];

  googleAuthToken = googleAuthInfo.allTokens;

  if (!googleAuthToken) return;

  oauth2Client.setCredentials(googleAuthToken);

  try {
    const docs = google.docs({ version: "v1", auth: oauth2Client });
    await docs.documents.batchUpdate({
      documentId,
      requestBody: {
        requests: [
          {
            insertText: {
              location: { index: 1 },
              text: text + "\n",
            },
          },
        ],
      },
    });
  } catch (e) {
    console.error(e);
  }
}
