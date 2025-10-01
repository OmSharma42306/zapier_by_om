import axios from "axios";

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