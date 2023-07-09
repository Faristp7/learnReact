import { Component } from "react";
import "../App.css";

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
      <div class="text-center mt-10">
        <h3 class="font-bold text-3xl mb-5">Count Value is : {this.state.Counter}</h3>
        <button class="btn-green" onClick={() => this.increment()}>
          Increment
        </button>
        <button class="btn-red" onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
