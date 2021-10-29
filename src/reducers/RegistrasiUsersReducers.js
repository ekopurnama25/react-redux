import {
    CREATE_REGISTRASI_USERS,
} from "../actions/types";

const initialState = [];

function RegistrasiUsersReducers(regisUsers = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_REGISTRASI_USERS:
            return [...regisUsers, payload];

        default:
            return regisUsers;
    }
};

export default RegistrasiUsersReducers;