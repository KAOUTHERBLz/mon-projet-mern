//import
import {combineReducers} from 'redux'
import productReducer from './product';
import userReducer from './user';
 import adminReducer from './admin';
 import orderReducer from './order';
// create rootReducer
const rootReducer=combineReducers({productReducer,userReducer,adminReducer,orderReducer});

export default rootReducer;