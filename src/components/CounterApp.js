import React, { Component } from 'react';
import { connect } from 'react-redux';

class CounterApp extends Component {
  render() {
    return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <button onClick={() => this.props.decrement()}>-</button>
        <h1 style={{padding: 20}}>{this.props.counter}</h1>
        <button onClick={() => this.props.increment()}>+</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)