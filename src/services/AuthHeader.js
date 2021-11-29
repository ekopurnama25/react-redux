//import AuthUsersServices from "./AuthUserServices";
export default function authHeader() {
  const users =  JSON.parse(localStorage.getItem('users'));

  console.log(users);

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    console.log(user);
    return {};
  }
}
