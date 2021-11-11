import axios from "../http-common";
import authHeader from "./AuthHeader";

const CheckUsers = () => {
  return axios.get("/users", { headers: authHeader() });
};

const UserServices = {
    CheckUsers,
};

export default UserServices;