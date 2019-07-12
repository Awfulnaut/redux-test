
import React, { Component } from 'react';
import { configureStore } from './store'
import { Provider, connect } from 'react-redux';
import { AddTodo, VisibleTodoList, Footer } from './components';
import * as actions from './actions';
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

const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);