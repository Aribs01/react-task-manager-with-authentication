import axios from "axios";
import authHeader from './auth-header';
const API_URL = "https://stage.api.sloovi.com/";
const company_id = localStorage.getItem("company_id")
const params = new URLSearchParams([['product', 'outreach'],['company_id', company_id]]);

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", { email, password })
      .then((response) => {
        if (response.data.results.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("company_id", response.data.results.company_id);
          console.log(localStorage.getItem("company_id"));
        }
        else {
            console.log("Back-end Issue");
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  getUser() {
    // console.log(company_id);
    return axios.get(API_URL + 'team', { headers: authHeader(), params });
  }
}
export default new AuthService();
