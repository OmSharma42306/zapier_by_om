import { prismaClient as client} from "@repo/db";
import { oauth2Client } from "../oauthClient"

export async function googleTokenManager(userId : number){
    console.log(' i am here',userId);
    const googleAuth = await client.user.findMany({
        select : {googleAuth : true},
        where: {
            id : userId
        },
    });

    console.log("gegg",googleAuth)


    let googleAuthToken : any;

    let googleAuthInfo = googleAuth[0].googleAuth[0];
    console.log("info",googleAuthInfo);
    googleAuthToken  = googleAuthInfo.allTokens;

        console.log("pass 1")
    googleAuthToken = googleAuthInfo.allTokens;
    let expire_date= googleAuthToken?.expiry_date;
    const now = Date.now();
    const FIVE_MIN = 5 * 60 * 1000;
  oauth2Client.setCredentials(googleAuthToken);
    if(expire_date - now < FIVE_MIN){
            console.log("Refreshing token...");
        console.log("pass 2")
        const { credentials }:any = await oauth2Client.refreshAccessToken();


        await client.googleAuth.updateMany({
            where : {userId : userId},
            data : {
                allTokens : credentials
            }
        });
        console.log("pass x")
        oauth2Client.setCredentials(credentials);
        console.log("pass y")

    console.log("Token refreshed.");
    }
    console.log("info2",googleAuthInfo);
console.log("pass 3")
    return googleAuthInfo;



};