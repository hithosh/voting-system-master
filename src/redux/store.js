import { createStore } from 'redux';
// import reducer from './reducers';
import loginReducer from './reducers/LoginReducers';

// const allReducers = combineReducers({
//     auth: loginReducer,
//      
// });


const store = createStore(loginReducer);
export default store; 