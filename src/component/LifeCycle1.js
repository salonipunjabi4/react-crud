import React, { Component } from "react";
import LifeCycle2 from "./LifeCycle2";

class LifeCycle1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
    console.log("LifeCycle 1 Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle1 getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Lifecycle1 componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Lifecycle1 shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle1 getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Lifecycle2 componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "Max",
    });
  };

  render() {
    console.log("Lifecycle1 render");
    return (
      <div>
        <div>LifeCycle 1{this.state.name}</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycle2 />
      </div>
    );
  }
}

export default LifeCycle1;
