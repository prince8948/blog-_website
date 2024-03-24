import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type : String,
    },
    username :{
        username :String,
    },
    password: {
        type:String,
    }
})

const user = mongoose.model('user', userSchema);

export default user;