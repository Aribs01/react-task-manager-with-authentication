import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://stage.api.sloovi.com/';
const company_id = localStorage.getItem("company_id")
const params = new URLSearchParams([['product', 'outreach'],['company_id', company_id]]);

class UserService {
  getUser() {
    return axios.get(API_URL + `/team`, { headers: authHeader() });
  }
}
export default new UserService();
// /team?product=outreach&company_id=