import axios from "axios";

class ApiService {
  fetchUsers() {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  }

  addUser(userDetails) {
    return axios.post("/signup", JSON.stringify(userDetails));
  }
}
export default new ApiService();
