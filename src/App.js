
import React, { Component } from 'react';
import { configureStore } from './store'
import { Provider, connect } from 'react-redux';
import { Footer } from './components';
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

const Todo = ({
    onClick,
    completed,
    text
}) => (
        <li
            onClick={onClick}
            style={{
                textDecoration:
                    completed ?
                        'line-through' :
                        'none'
            }}
        >
            {text}
        </li>
    );

const TodoList = ({ todos, onTodoClick }) => (
        <ul>
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                />
            )}
        </ul>
    );

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <input ref={node => {
                input = node;
            }} />
            <button onClick={() => {
                dispatch(actions.addTodo(input.value));
                input.value = '';
            }}>
                Add Todo
        </button>
        </div>
    );
};
AddTodo = connect()(AddTodo);

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(
                t => t.completed
            );
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
    }
}

const mapStateToTodoListProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    };
};
const mapDispatchToTodoListProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(actions.toggleTodo(id));
        }
    };
};
const VisibleTodoList = connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
)(TodoList);

const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);