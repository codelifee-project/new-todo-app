import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    //why throw an error? isn't 'this' already pointing 'Counter class?'
    //since it is in the same class?
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <div className='counter'>
        <CounterButton
          by={1}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <span className='count'>{this.state.counter}</span>
      </div>
    );
  }

  increment(by) {
    this.setState((prevState) => {
      return { counter: prevState.counter + by };
    });
  }

  decrement(by) {
    this.setState({
      counter: this.state.counter - by,
    });
  }
}

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    //why throw an error? isn't 'this' already pointing 'Counter class?'
    //since it is in the same class?
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <div className='count'>
        <button onClick={this.increment}>+{this.props.by}</button>
        <button onClick={this.decrement}>-{this.props.by}</button>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + this.props.by,
    });

    this.props.incrementMethod(this.props.by);
  }

  decrement() {
    this.setState({
      counter: this.state.counter - this.props.by,
    });

    this.props.decrementMethod(this.props.by);
  }
}

CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropTypes.number,
};

export default Counter;