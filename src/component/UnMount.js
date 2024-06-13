import React, { Component } from "react";
import User1 from "./User1";

class UnMount extends Component {
  constructor() {
    super();
    this.state = {
      toggleUser: true,
    };
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.toggleUser ? <User1 /> : null}
          <button
            onClick={() => {
              this.setState({ toggleUser: !this.state.toggleUser });
            }}
          >
            Delete User Info
          </button>
        </h1>
      </div>
    );
  }
}

export default UnMount;
