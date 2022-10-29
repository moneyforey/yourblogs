import { Auth_Login_Error, Auth_Login_Loading, Auth_Login_Success, Auth_Logout, Auth_Register_Error, Auth_Register_Loading, Auth_Register_Success } from "./auth.types"
import axios from"axios";


export const registerApi=(formdata)=>async(dispatch)=>{
       dispatch({type:Auth_Register_Loading});
       try{
           let res = await axios.post('http://localhost:9090/signup',formdata)
           dispatch({type:Auth_Register_Success,payload:res.data})    

       }catch(err){
              dispatch({type:Auth_Register_Error})
       }
}


export const login=(creds)=>async(dispatch)=>{
    dispatch({type:Auth_Login_Loading});
    try{
        let res = await axios.post('http://localhost:9090/login',creds)
        dispatch({type:Auth_Login_Success,payload:res.data})

    }catch(err){
        dispatch({type:Auth_Login_Error})
    }

}

export const logoutAPI =()=>({type:Auth_Logout})