import {
    AUTHENTICATED,
    NOT_AUTHENTICATED,
    LOGOUT,
  } from "../actions/types";
  
  const users = JSON.parse(localStorage.getItem('users'));
  
  const initialState = users
    ? { isLoggedIn: true, users }
    : { isLoggedIn: false, users: null };
  
  // eslint-disable-next-line
  function AuthUsersReducers (authUser = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case AUTHENTICATED:
        return {
          ...authUser,
          isLoggedIn: true,
          users: payload.users,
        };
      case NOT_AUTHENTICATED:
        return {
          ...authUser,
          isLoggedIn: false,
          users: null,
        };
      case LOGOUT:
        return {
          ...authUser,
          isLoggedIn: false,
          users: null,
        };
      default:
        return authUser;
    }
  }

  export default AuthUsersReducers;