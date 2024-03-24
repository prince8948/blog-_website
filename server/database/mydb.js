import mongoose from 'mongoose'


const Connection = async (username, password)=>{
    const URL =`mongodb://${username}:${password}@ac-koojyqr-shard-00-00.77icusw.mongodb.net:27017,ac-koojyqr-shard-00-01.77icusw.mongodb.net:27017,ac-koojyqr-shard-00-02.77icusw.mongodb.net:27017/?ssl=true&replicaSet=atlas-11b0tp-shard-0&authSource=admin&retryWrites=true&w=majority&appName=BlogApp`;
    try{
        await mongoose.connect(URL, { useNewUrlParser:true});
        console.log("Database connected successfully ")
    }
    catch(error){
        console.log('database is not connected', error);
    }
}


export default Connection;