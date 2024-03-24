import axios from 'axios'
import { API_NOTIFICATION_MESSAGES,SERVICE_URLS } from '../constants/config.js';

const API_URL = 'http://localhost:8000';

const axiosINstance = axios.create({
    baseURL: API_URL,
    timeout:10000,
    headers:{
        "Content-Type":"applicatio/json"
    }
})

axiosINstance.interceptors.request.use(
    function(config){
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)

axiosINstance.interceptors.response.use(
    function (response){
         //stop global loader here
        return ProcessResponse(response)
    },
    function (error){
        // stop global loader here
        return Promise.reject(processError(error));
    }
)

//////////////////////////////////

const ProcessResponse = (response) =>{
    if (response.status === 200){
        return {isSucess:true,data:response.data}
    }
    else{
        return {
            isFailure:true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}



const processError = (error)=>{
    if(error.response){
        // request made and server response with a status other 
        // that falls out of range 200
        
        console.log('Error in Response:', error.tojson());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.reponseFailure,
            code: error.reponse.status
        }
    }else if(error.request){
            // request send but no response meaan connectivity issues
           
            console.log('Error in Request:', error.tojson());
            return {
                isError: true,
                msg: API_NOTIFICATION_MESSAGES.requestFailure,
                code: ''
            }
        }
    else{
        //somtime happned in frontend or in setting up request that triggers an error
        
        console.log('Error in Network:', error.tojson());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkFailure,
            code: ''
        }
    }
}

const API = {

};

for(const [key,value] of Object.entries(SERVICE_URLS)){
    API[key] =(body, showUploadProgress, showDownloadProgress)=>{
        axiosINstance({
            method:value.method,
            url: value.url,
            data: body,

        })
    }
}