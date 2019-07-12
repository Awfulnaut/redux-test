import React from 'react';
import { AddTodo, VisibleTodoList, Footer } from './index';

const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default TodoApp;