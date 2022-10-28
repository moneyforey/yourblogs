import { Auth_Login_Error, Auth_Login_Loading, Auth_Login_Success, Auth_Logout } from "./auth.types"
import axios from"axios";

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