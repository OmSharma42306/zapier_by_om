import { google,drive_v3 } from "googleapis";

/**
 * Initialize Google Drive API client with an existing OAuth token
 */

export function getDriveClient(accessToken : string): drive_v3.Drive{
    const auth = new google.auth.OAuth2();
    auth.setCredentials({access_token : accessToken});
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