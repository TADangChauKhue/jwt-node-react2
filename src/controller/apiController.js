
import loginRegisterService from '../service/loginRegisterService';
const testApi=(req,res) => {
    return res.status(200).json({
        message:'ok',
        data:'test api'
    })

}

const handleRegister=async(req,res)=>{
    try{
        // req.body: email, phone, username, password
        if(!req.body.email || !req.body.password){
            return res.status(200).json({
            EM: 'Missing required parameters', // error message
            EC:'1',//error code
            DT: '',//date
            })
    
        }
        if(req.body.password && req.body.password.length <3){
            return res.status(200).json({
            EM: 'Your password must have more than 3 letters', // error message
            EC:'1',//error code
            DT: '',//date
            })
        }

        // service: create user

        let data=await loginRegisterService.registerNewUser(req.body)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,//error code
            DT: '',//date
        }) 

    }catch(e){
        return res.status(500).json({
            EM: 'error',
            EC:'-1',//error code
            DT: '',//date
        })
    }

}
const handleLogin=async(req,res)=>{
        try{
            let data = await loginRegisterService.handleUserLogin(req.body);
            // set cookie
            res.cookie("jwt",data.DT.access_token,{httpOnly:true,maxAge:60*60*1000});
            return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
            })
        }
        catch(error){
            return res.status(500).json({
                EM: 'error',
                EC:'-1',//error code
                DT: '',//date
            })           
        }

 }
module.exports = {
    testApi, handleRegister,handleLogin
}