//import AuthUsersServices from "./AuthUserServices";
export default function authHeader() {
  const users = localStorage.getItem("users");

  console.log(users);

  // if (user && user.accessToken) {
  //   return { authorization: 'Bearer ' + user.accessToken };
  // } else {
  //   console.log(user);
  //   return {};
  // }
}
