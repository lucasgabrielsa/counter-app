import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - componentWillUnmount ");
  }

  formatContador() {
    const contadorValue = this.props.counter.value;
    return contadorValue === 0 ? "Zero" : contadorValue;
  }

  getBagdeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    console.log("Counter - render");
    return (
      <div>
        <span className={this.getBagdeClasses()}>{this.formatContador()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
