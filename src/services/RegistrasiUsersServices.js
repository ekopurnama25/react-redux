import axios from "../http-common";

const RegisUSers = data => {
  return axios.post("/regis", data);
};

const RegistrasiUsersServices = {
  RegisUSers,
};

export default RegistrasiUsersServices;