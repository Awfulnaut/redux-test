import React from 'react';
import reducers from '../reducers';

const Todo = ({ onTodoClick, onDeleteClick, completed, text, todoId }) => (
        <li>
            <span
                onClick={onTodoClick}
                style={{
                    textDecoration:
                        completed ?
                            'line-through' :
                            'none'
                }}
            >
                {text}
            </span>
            <button 
                onClick={onDeleteClick}
                style={{
                    marginLeft: 5,
                    background: 'red',
                    color: 'white'
                }}
            >
                X
            </button>
        </li>
    );

const TodoList = ({ todos, onTodoClick, onDeleteClick }) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onTodoClick={() => onTodoClick(todo.id)}
                onDeleteClick={() => onDeleteClick(todo.id)}
            />
        )}
    </ul>
);

export default TodoList;