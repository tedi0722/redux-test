import React, { Component } from 'react';
import CounterApp from '../components/CounterApp';

export default class Home extends Component {
  render() {
    return (
      <div style={{marginTop: 30}}>
        <CounterApp />
      </div>
    )
  }
}
