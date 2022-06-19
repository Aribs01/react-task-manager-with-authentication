import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://stage.api.sloovi.com/';

class TaskService {
    postTask() {
      return axios.post(API_URL + 'task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=<company_id>', { headers: authHeader() });
    }
    getAllTask() {
      return axios.get(API_URL + 'task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=<company_id>', { headers: authHeader() });
    }
    getSingleTask() {
      return axios.get(API_URL + 'task/lead_465c14d0e99e4972b6b21ffecf3dd691/<task_id_from_previous_test>?company_id=<company_id>', { headers: authHeader() });
    }
    updateTask() {
        return axios.get(API_URL + 'task/lead_465c14d0e99e4972b6b21ffecf3dd691/<task_id>?company_id=<comapany_id>', { headers: authHeader() });
      }
    deleteTask() {
      return axios.get(API_URL + 'task/lead_465c14d0e99e4972b6b21ffecf3dd691/<task_id>?company_id=<comapany_id>', { headers: authHeader() });
    }
}
export default new UserService();