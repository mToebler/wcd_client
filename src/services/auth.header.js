import axios from 'axios'

export function authHeader() {
  const token = JSON.parse(localStorage.getItem('token'));
  if(token && token.length > 30) {
    console.log('authHeader: token found:', token)
    console.log(`authHeader: returning:, { 'x-access-token': ${token} }`)
    // for Node.js Express back-end
    return { 'x-access-token': token };
  } else {
    console.log('authHeader: No token found!')
    return {};
  }
}

export const checkLogin = () => {
  axios
    .get(`http://localhost:3030/api/v1/checkauth`, { headers: authHeader() })
    .then((res) => {
      console.log('authed');
      return true;
    })
    .catch((err) => {
      console.log('not-authed', err);
      localStorage.clear();
      return false;
    });
}


module.export = { authHeader, checkLogin }