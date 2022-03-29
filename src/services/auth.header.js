export default function authHeader() {
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
