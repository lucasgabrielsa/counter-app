import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - componentDidMount");
  }

  state = {
    counters: [
      { id: 1, value: 0, title: "Titulo 1" },
      { id: 2, value: 4, title: "Titulo 2" },
      { id: 3, value: 0, title: "Titulo 3" },
      { id: 4, value: 0, title: "Titulo 4" }
    ]
  };

  handleDelete = counterId => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters: counters
    });
  };

  handleIncrement = counter => {
    //console.log(counter);
    const counters = this.state.counters.map(c => {
      if (c.id === counter.props.counter.id) {
        c.value = c.value + 1;
      }
      return c;
    });
    this.setState({
      counters
    });
  };

  handleResetCounters = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
  };

  handleBackToStateInicial = () => {
    this.setState({
      counters: [
        { id: 1, value: 0, title: "Titulo 1" },
        { id: 2, value: 4, title: "Titulo 2" },
        { id: 3, value: 0, title: "Titulo 3" },
        { id: 4, value: 0, title: "Titulo 4" }
      ]
    });
  };

  totalValues() {
    let value = 0;
    this.state.counters.forEach(c => {
      value += c.value;
    });
    return value;
  }

  render() {
    console.log("App - render");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          totalValues={this.totalValues()}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleResetCounters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onBack={this.handleBackToStateInicial}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
