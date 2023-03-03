// IMPORTATION

import {
    CURRENT_ADMIN,
    FAIL_ADMIN,
    LOAD_ADMIN,
    LOGOUT_ADMIN,
    
  } from "../ActionType/admin";

   // INITIAL STATE
   const initialState = {
    user: null,
    LOAD_ADMIN: false,
    erros: [],
    isAdmin : false,
    isAuth: false,
  };
  
const adminReducer = ( state = initialState , {type,payload}) => {
    switch (type) {
        
        case LOAD_ADMIN :
            localStorage.setItem("token" , payload.token)
            return{...state , loadAdmin : false , admin : payload.admin ,isAuthAdmin : true, isAdmin : true } 
        case CURRENT_ADMIN : 
             return {...state , admin:payload , isAdmin : true, isAuthAdmin : true , loadAdmin: false}  
           
        case LOGOUT_ADMIN :
            localStorage.removeItem("token")
            return { admin : null , 
                loadAdmin : false , 
                errors: [] , 
                isAdmin : false , 
                isAuthAdmin : false ,  
                listusers : [],         
            }      
        case FAIL_ADMIN : 
            return {...state , loadAdmin : false , errors : payload}            
        default:
            return state
    }
}
export default adminReducer