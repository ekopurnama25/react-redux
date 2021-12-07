export default function authHeader() {
  const users =  JSON.parse(localStorage.getItem('users'));

  if (user && user.accessToken) {
    console.log(users.accessToken);
    return { 'Authorization': 'Bearer ' + user.accessToken };
  } else {
    console.log(user);
    return {};
  }
}
