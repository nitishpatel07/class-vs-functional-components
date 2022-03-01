import React from "react";
import Functional from "./Functional";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
      show: true,
    };
  }
  componentDidMount() {
    console.log("component did mount");
  }
  componentDidUpdate(prevState) {
    if (prevState.num !== this.state.num) {
      console.log("component did update");
    }
  }

  handleAdd() {
    this.setState((state) => ({ num: state.num + 1 }));
  }
  handleSubtract() {
    this.setState((state) => ({ num: state.num - 1 }));
  }

  handleRemove() {
    this.setState((state) => ({ show: !state.show }));
  }
  render() {
    return (
      <>
        <button onClick={this.handleAdd.bind(this)}>increase</button>
        <button onClick={this.handleSubtract.bind(this)}>decrease</button>
        <button onClick={this.handleRemove.bind(this)}>
          {this.state.show ? "remove" : "show"}
        </button>
        {this.state.show ? <Child number={this.state.num} /> : null}
        <Functional />
      </>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    return (
      <>
        <h1>{this.props.number}</h1>
      </>
    );
  }
}
