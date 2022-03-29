import axios from "axios";
const API_URL = "http://localhost:3030/api/v1/";
class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("token", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("token");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('token'));;
  }
}
export default new AuthService();