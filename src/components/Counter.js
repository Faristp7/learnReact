import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      Counter: 0,
    };
  }

  increment() {
    this.setState({
      Counter: this.state.Counter + 1,
    });
  }

  decrement() {
    if (this.state.Counter !== 0) {
      this.setState({
        Counter: this.state.Counter - 1,
      });
    }
  }

  render() {
    return (
      <div>
        <h3>Count Value is : {this.state.Counter}</h3>
        <button onClick={() => this.increment()}>increment</button>
        <button onClick={() => this.decrement()}>decrement</button>
      </div>
    );
  }
}

export default Counter;
