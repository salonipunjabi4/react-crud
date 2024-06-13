import React, { Component } from "react";

class User1 extends Component {
  componentWillUnmount() {
    console.warn("componentWillUnmount call");
    alert("User has been deleted");
  }

  render() {
    console.warn("render call");
    return (
      <div>
        <h3>User Name: Allen</h3>
        <h3>User Email: allen@gmail.com</h3>
      </div>
    );
  }
}
export default User1;
