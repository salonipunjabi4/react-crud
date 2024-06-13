import { Component } from "react";

class EventBinding extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log("Click Handler");
    this.setState({ message: "Bye" });
  }

  //   clickHandler = () => {
  //     console.log("Click Handler");
  //     this.setState({ message: "Bye" });
  //   };
  // with arrow function bind is not require...with normal bind is required

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click </button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
export default EventBinding;
