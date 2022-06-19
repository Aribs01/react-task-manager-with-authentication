export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.results.token) {
      return { Authorization: 'Bearer ' + user.results.token };
        console.log(user.token);
      // for Node.js Express back-end
        // return { 'x-access-token': user.token };
    } else {
      return {};
    }
  }
  