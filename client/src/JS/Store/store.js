//import createstore
import {createStore,applyMiddleware, compose,}from "redux"


// import rootReducers
import rootReducer from "../Reducers";
import thunk from "redux-thunk";
const composeEnhancer =window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ ||compose;

// store
const store = createStore (rootReducer,composeEnhancer (applyMiddleware(thunk)));

//store

 //export
 export default store;