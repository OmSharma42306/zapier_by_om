import { google,drive_v3 } from "googleapis";


// todo : add type for res in all functions.

/**
 * Initialize Google Drive API client with an existing OAuth token
 */

export function getDriveClient(accessToken : string,refresh_token : string): drive_v3.Drive{
    const auth = new google.auth.OAuth2();
    auth.setCredentials({access_token : accessToken,refresh_token : refresh_token });
    return google.drive({ version : "v3",auth})
}


/**
 * List all shared drives
 */

export async function listDrives(driveClient : drive_v3.Drive){
    const drives: drive_v3.Schema$Drive[] = [];
    let pageToken : string | undefined = undefined;
    
    do{
        const res : any = await driveClient.drives.list({
            pageSize : 100,
            pageToken,
        });

        if(res.data.drives) drives.push(...res.data.drives);
        pageToken = res.data.nextPageToken || undefined;
    }while(pageToken);
    
    return drives;
}


/**
 * List folders (optional: inside a drive or My Drive)
 */

export async function listFolders( driveClient : drive_v3.Drive, driveId? : string){
    const folders : drive_v3.Schema$File[] = [];
    let pageToken : string | undefined = undefined;
    
    const query = "mimeType='application/vnd.google-apps.folder'";

    do{
        const res : any = await driveClient.files.list({
            q : query,
            pageSize : 100,
            fields :  "nextPageToken, files(id, name, mimeType, parents)",
            pageToken,
            includeItemsFromAllDrives : true,
            supportsAllDrives : true,
            driveId ,
            corpora : driveId ? "drive" : "allDrives",
        });

        if (res.data.files) folders.push(...res.data.files);
        pageToken = res.data.nextPageToken || undefined;

    }while(pageToken);

    return folders;
};


/**
 * List Google Docs and Sheets
 */

export async function listDocsAndSheets(driveClient : drive_v3.Drive, driveId? : string){
    const files : drive_v3.Schema$File[] = [];
    let pageToken : string | undefined = undefined;

      const query = `
    mimeType='application/vnd.google-apps.document' or
    mimeType='application/vnd.google-apps.spreadsheet'
  `;

    do {
        const res : any = await driveClient.files.list({
            q : query,
            pageSize : 100,
            fields :  "nextPageToken, files(id, name, mimeType, parents)",
            pageToken,
            includeItemsFromAllDrives : true,
            supportsAllDrives : true,
            driveId,
            corpora : driveId ? "drive" : "allDrives",
        });

        if (res.data.files) files.push(...res.data.files);
        pageToken = res.data.nextPageToken || undefined ;
    }while(pageToken);

    return files;
}