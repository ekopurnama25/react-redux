import {
    AUTHENTICATED,
    NOT_AUTHENTICATED
} from "./types";

import AuthUsersServices from "../services/AuthUserServices";

export const AuthActionUsers = (email, password) => async (dispatch) => {
    const res = await AuthUsersServices.AuthUsers({ email, password });
    try {
        dispatch({
            type: AUTHENTICATED,
            payload: { user: res.data },
        });

        return Promise.resolve(res.data);

    } catch (err) {
        dispatch({
            type: NOT_AUTHENTICATED,
        });

        return Promise.reject(err);
    }
};

