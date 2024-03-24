export const API_NOTIFICATION_MESSAGES ={
    loading:{
        title : 'Loading....',
        message: 'Data is Being loaded, please wait'
    },
    success:{
        title:'success',
        message:'Data successfully loaded'
    },
    reponseFailure:{
        title:'Error',
        message:"An errored while fetching response from the server please try again"
    },
    requestFailure: {
        title:'error',
        message:'An error occured while parsing request data'
    },
    networkFailure:{
        title:'Error',
        message:'enable to connect server please check internet connectivity '
    }
}


//API's service call

export const SERVICE_URLS = {
    userSignup:{url:'/signup', method:'POST'}
}