import axios from "../http-common";

const AuthUsers = data => {
  return axios.post("/auth", data)
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
};

const AuthUsersServices = {
    AuthUsers,
};

export default AuthUsersServices;