import React, { Component } from "react";
import UserService from "../service/UserService";
import { Link, withRouter } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    //this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.loadUsersList();
  }
  loadUsersList() {
    UserService.fetchUsers().then((response) => {
      this.setState({ users: response.data });
    });
  }

  // handleUpdate(userId) {
  //   this.props.history.push(`/updateCustomer/${userId}`);
  // }

  // handleDelete(userId) {
  //   fetch(`/users/deleteById/{id}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network error");
  //       }
  //       this.setState({
  //         users: this.state.users.filter((user) => user.userId !== userId),
  //       });
  //     })
  //     .catch((error) => console.error("Error updating customer: ", error));
  // }
  render() {
    return (
      <div>
        <h2 className="text-center">User Details</h2>
        <Link class="nav-link" to="/addUser">
          Add User
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>{user.nationality}</td>
                <td>
                  <button
                    className="btn btn-success"
                    //onClick={() => this.handleDelete(user.userId)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success"
                    //onClick={() => this.handleUpdate(user.userId)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default User;
//export default withRouter(User);
