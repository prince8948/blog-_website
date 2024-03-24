
import User from "../models/userModels.js"
//it is used to validate schema or data 

export const signupUser = async(req, res)=>{
    try{
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        return res.status(200).json("Signup Successfull..!!")
    }
    catch(error){
        return res.status(500).json( {msg: 'error while signup the user '})
    }
}