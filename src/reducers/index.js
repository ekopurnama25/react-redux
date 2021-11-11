import { combineReducers } from "redux";
import RegistrasiUsersReducers from "./RegistrasiUsersReducers";
import AuthUsersReducers from "./AuthUsersReducers";

export default combineReducers({
    RegistrasiUsersReducers,
    AuthUsersReducers
});