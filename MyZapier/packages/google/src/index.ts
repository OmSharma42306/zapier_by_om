import { GOOGLE_DOCS_ACTIONS,GOOGLE_DOCS_TRIGGERS } from "./google-docs/google-docs-utilities";
import { syncGoogleDrive } from "./google-drive/syncGoogleDrive-service"

export const GOOGLE_DOCS = { GOOGLE_DOCS_ACTIONS,GOOGLE_DOCS_TRIGGERS };
export const GOOGLE_SHEET = {};
export const GMAIL = {};
export const GOOGLE_DATA = { syncGoogleDrive }
