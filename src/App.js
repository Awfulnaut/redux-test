
import React, { Component } from 'react';
import { configureStore } from './store'
import { Provider } from 'react-redux';
import { TodoApp } from './components';
import './index.css';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.store = configureStore()
  }

  render() {
    return (
      <Provider store={this.store}>
          <TodoApp />
      </Provider>
    )
  }
}

export default App;