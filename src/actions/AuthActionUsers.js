import {
    AUTHENTICATED,
    NOT_AUTHENTICATED,
    SET_MESSAGE
} from "./types";

import AuthUsersServices from "../services/AuthUserServices";

export const AuthActionUsers = (email, password) => async (dispatch) => {
    return AuthUsersServices.AuthUsers(email, password).then(
        (data) => {
            dispatch({
                type: AUTHENTICATED,
                payload: { user: data },
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: NOT_AUTHENTICATED,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

