import { Auth_Login_Error, Auth_Login_Loading, Auth_Login_Success, Auth_Logout } from "./auth.types";

let token = localStorage.getItem("token") || "";
let initState ={
    loading:false,
    error:false,
    token:token
}


export const authReducer =(state=initState,{type,payload})=>{
    switch (type){
        case Auth_Login_Loading:{
            return{
                ...state,
                loading:true
            }
        }
        case Auth_Login_Error:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        case Auth_Login_Success:{
            localStorage.setItem("token",payload.token)
            return{
                ...state,
                loading:false,
                error:false,
                token:payload.token
            }
        }
        case Auth_Logout:{
            localStorage.removeItem("token");
            return{
                ...state,
                loading:false,
                error:false,
                token:''
            }
        }
        default:{
            return state;
        }
    }
}