import React, { Component } from 'react';
import './App.css';
import CounterApp from './components/CounterApp';
import { Provider } from 'react-redux'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CounterApp />
        </div>
      </Provider>
    );
  }
}

export default App;
