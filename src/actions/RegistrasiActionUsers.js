import {
    CREATE_REGISTRASI_USERS,
} from "./types";

import RegistrasiUsersServices from "../services/RegistrasiUsersServices";

export const RegistrasiActionUsers = (username, email, password) => async (dispatch) => {
    try {
        const res = await RegistrasiUsersServices.RegisUSers({ username, email, password });

        dispatch({
            type: CREATE_REGISTRASI_USERS,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

