import { GOOGLE_DOCS_ACTIONS,GOOGLE_DOCS_TRIGGERS } from "./google-docs/google-docs-utilities";
import { syncGoogleDrive } from "./google-drive/syncGoogleDrive-service";
import { GOOGLE_GMAIL_ACTIONS } from "./gmail/gmail-utilities";
import { googleTokenManager } from "./googleTokenManager/googleTokenManager"

export const GOOGLE_DOCS = { GOOGLE_DOCS_ACTIONS,GOOGLE_DOCS_TRIGGERS };
export const GOOGLE_SHEET = {};
export const GMAIL = { GOOGLE_GMAIL_ACTIONS };
export const GOOGLE_DATA = { syncGoogleDrive }
export const GOOGLE_TOKEN_MANAGER = { googleTokenManager };