import { LOGIN,LOGOUT } from "../actions/LoginAction";

const initialState = {
    userId: "",
    name: "",
    image:""
};
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
          var data=  action.payload.auth;
          let host="www.elitesdecks.com";
          data.image=host+data.image;
            return data;
        case LOGOUT:
             return {};
        default:
            return state;
    }
}