import { getDriveClient, listDrives, listFolders, listDocsAndSheets} from "./googleDriveService";


export async function syncGoogleDrive( access_token : string, refresh_token : string ){
    const driveClient = getDriveClient(access_token,refresh_token);
    const drives = await listDrives(driveClient);
    console.log(drives);

    const folders = await listFolders(driveClient);
    console.log(folders.map((f:any)=>{console.log(f.name)}));

    const docsAndSheets = await listDocsAndSheets(driveClient);
    console.log(docsAndSheets.map((das:any)=>{console.log(das.name)}));

    return { drives,folders,docsAndSheets };
}

