import axios from "axios";
const token = localStorage.getItem('token')

export async function getAvilableTriggers(){
    const response = await axios.get('http://localhost:5000/api/v1/trigger/get-avilable-triggers');
    console.log(response.data);
    return response;
}

export async function getAvilableActions(){
    const response = await axios.get('http://localhost:5000/api/v1/action/get-avilable-actions');
    console.log(response.data);
    return response;
}

export async function getGoogleData(){
    const response = await axios.get("http://localhost:5000/api/v1/googleData/getGoogleDataInfo");
    const datas = await response.data;
    const data = datas.msg;
    console.log("k",data);
    return data;
}


// zaps environment

export async function createZapApi(token : string){
    const response = await axios.post('http://localhost:5000/api/v1/zap/create-zap',{},{
        headers : {
            Authorization : `Bearer ${token}`
        }
    });
    console.log("dada",response.data);
    return response.data;
}

export async function saveTriggerToDB(zapId : string, triggerId : string){
    const response = await axios.post('http://localhost:5000/api/v1/trigger/add-trigger',{zapId : zapId, triggerId : triggerId});
    return response.data;
}

// actions environment

export async function saveActionToDB(action:any){
    console.log(token);
    console.log("api : ",action);
    const {zapId , actionId, metadata,index} = action;
    const response = await axios.post('http://localhost:5000/api/v1/action/add-action',{zapId,actionId,metadata,index},{
        headers : {
            Authorization : `Bearer ${token}`
        }
    });
    console.log(response.data);
//     {
//     "zapId": "e5542099-c8b2-46c4-952e-89c9fcc1c463",
//     "actionId": "fd2c5dfc-c763-43f0-8f93-a252760caa91",
//     "metadata": {
//         "text": "fewefwfewfwf",
//         "type": "Action",
//         "appName": "Google Docs",
//         "operation": "Append Text",
//         "documentId": "1tR5wBA6YpkR39C2AEFxpAtEcH3cdJFuTKOiYI5rA04M"
//     },
//     "index": 2
// }


//     {
//   "actionId": "fd2c5dfc-c763-43f0-8f93-a252760caa91",
//   "zapId": "29dd7a7d-7fc7-4579-86b9-e475da367822",
//   "data":{
//   "text": "agar main kahoon",
//   "type": "Action",
//   "appName": "Google Docs",
//   "operation": "Append Text",
//   "documentId": "1G6sDTT57pQe4aFjukIjIJhtMnyV4JEbKFbTKPkooyc0"
//   },
//   "index" : 4
// }

}

// add all actions to ZapRuns Section....
export async function saveAllActionsToZapRunsDBTable(zapId : string){
    console.log("zapId: ",zapId);

    const response = await axios.post('http://localhost:5000/api/v1/zap/add-all-actions-to-zapRuns',{zapId : zapId});
    console.log(response.data);
    return response.data;
}