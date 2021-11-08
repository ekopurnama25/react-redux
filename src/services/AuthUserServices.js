import axios from "../http-common";

const AuthUsers = data => {
  return axios.post("/auth", data)
  .then((data) => {
    if (data.accessToken) {
      localStorage.setItem("users", JSON.stringify(data.data)); 
    }
    console.log(data);
    return data;
  });
};

const AuthUsersServices = {
    AuthUsers,
};

export default AuthUsersServices;