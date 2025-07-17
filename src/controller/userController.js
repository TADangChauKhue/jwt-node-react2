
import UserApiService from '../service/userApiService';
const readFunc = async(req,res) =>{
    try{
        let data = await UserApiService.getAllUser();
        return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
        })     


    }catch(e){
        console.log(e)
        return res.status(500).json({
            EM: 'error',
            EC:'-1',//error code
            DT: '',//date
        })    

    }

}

const createFunc = (req,res) =>{
    try{

    }catch(error){
        console.log(error);
        return res.status(500).json({
            EM: 'error',
            EC:'-1',//error code
            DT: '',//date
        })    

    }
    
}

const updateFunc = (req,res) =>{
    try{

    }catch(error){
        console.log(error);
        return res.status(500).json({
            EM: 'error',
            EC:'-1',//error code
            DT: '',//date
        })    

    }
}

const deleteFunc = (req,res) =>{
    try{

    }catch(error){
        console.log(error);
        return res.status(500).json({
            EM: 'error',
            EC:'-1',//error code
            DT: '',//date
        })    

    }
    
}
module.exports ={
    readFunc,createFunc,updateFunc,deleteFunc

}