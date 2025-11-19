import { prismaClient as client} from "@repo/db";
import { oauth2Client } from "../oauthClient"

async function googleTokenManager(userId : number){
    const googleAuth = await client.user.findMany({
        select : {googleAuth : true},
        where: {
            id : userId
        },
    });


    let googleAuthToken : any;

    let googleAuthInfo = googleAuth[0].googleAuth[0];

    googleAuthToken  = googleAuthInfo.allTokens;

        
    googleAuthToken = googleAuthInfo.allTokens;
    let expire_date= googleAuthToken?.expiry_date;
    const now = Date.now();
    const FIVE_MIN = 5 * 60 * 1000;

    if(expire_date - now < FIVE_MIN){
        const { credentials }:any = await oauth2Client.refreshAccessToken();


        await client.googleAuth.updateMany({
            where : {userId : userId},
            data : {
                allTokens : credentials
            }
        });

        oauth2Client.setCredentials(credentials);
        
    }




};