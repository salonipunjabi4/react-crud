import React, { Component } from "react";

class LifeCycle2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ryan",
    };
    console.log("LifeCycle 2 Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle2 getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Lifecycle2 componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Lifecycle2 shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle2 getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Lifecycle2 componentDidUpdate");
  }

  render() {
    console.log("Lifecycle2 render");
    return <div>LifeCycle 2</div>;
  }
}
export default LifeCycle2;
