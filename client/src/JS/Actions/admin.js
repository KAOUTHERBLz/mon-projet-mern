import axios from 'axios';
import { CURRENT_ADMIN, FAIL_ADMIN, LOAD_ADMIN, LOGOUT_ADMIN, SUCC_ADMIN } from '../ActionType/admin';


// SIGN UP
export const registerAdmin = (admin) => async (dispatch) => {
    dispatch({ type: LOAD_ADMIN });
    try {
      let result = await axios.post("/api/admin/registerAdmin", admin);
      dispatch({ type: SUCC_ADMIN, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
    }
  };
  
export const loginAdmin = (admin) => async (dispatch) => {
    dispatch ({type : LOAD_ADMIN})
    
    try {
        let result = await axios.post("/api/admin/loginAdmin" , admin)
        dispatch ( { type : LOAD_ADMIN , payload : result.data})
        
    } catch (error) {

        console.log(error)
    }
}

export const currentAdmin = () => async (dispatch) => {
    dispatch ({ type : LOAD_ADMIN})
    
    try {
     const config = {
         headers : {
             authorization : localStorage.getItem("token")
         }
     }
     let result = await axios.get("/api/admin/currentAdmin" , config)
     dispatch ({ type : CURRENT_ADMIN , payload : result.data})
    } catch (error) {
        console.log(error)
        
    }
    
    }
    
export const logoutAdmin = () => async (dispatch) => {
    dispatch ({ type : LOGOUT_ADMIN})
}
