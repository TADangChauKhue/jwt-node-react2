
import db from "../models/index";
import bcrypt from "bcryptjs";
const salt=bcrypt.genSaltSync(10);

const hashUserPassword =(userPassword)=>{
    let hashPassword= bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const checkEmailExist=async(userEmail)=>{
    let user=await db.User.findOne({
    where:{email:userEmail}
    })
    if (user){
        return true;
    }
    return false;

}

const registerNewUser =async (rawUserData) =>{
    
    try{
 
    let isEmailExit=await checkEmailExist(rawUserData.email);

    if (isEmailExit==true){
            return{
                EM:'The email already exit',
                EC: 1,

        }
    }
    let hashPassword =hashUserPassword(rawUserData.password);

    //create new user
    await db.User.create({
            email:rawUserData.email,
            username:rawUserData.username,
            password: hashPassword,
            phone: rawUserData.phone
    })

        return{
            EM:'A user is created successfully',
            EC: 0
        }

    }catch(e){
        return{
            EM:'Something wrong in service',
            EC: -2,
        }

    }

}   
module.exports = {
    registerNewUser
}
