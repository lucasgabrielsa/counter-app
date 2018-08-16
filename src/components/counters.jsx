import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - render");

    const { onReset, onBack, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Resetar
        </button>
        <button className="btn btn-primary btn-sm m-2" onClick={onBack}>
          Voltar contadores iniciais
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            <h4>{counter.title}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
