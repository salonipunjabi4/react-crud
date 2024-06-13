import axios from "axios";

class UserService {
  fetchUsers() {
    return axios.get("http://localhost:8081/users/fetchAll");
  }
}
export default new UserService();
