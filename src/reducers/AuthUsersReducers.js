import {
    AUTHENTICATED,
    NOT_AUTHENTICATED
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

function RegistrasiUsersReducers(authUsers = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case AUTHENTICATED:
            return {
                ...authUsers,
                isLoggedIn: true,
                user: payload,
            };
        case NOT_AUTHENTICATED:
            return {
                ...authUsers,
                isLoggedIn: false,
                user: null,
            };
    };
};

export default RegistrasiUsersReducers;