// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import { deleteAllTodos } from '../api/api';
import { toast } from 'react-toastify';

const TodoList = ({ todos, setTodos }) => {
  // Handle deleting all todos
  const handleDeleteAll = async () => {
    try {
      await deleteAllTodos(); // Call the API to delete all todos
      setTodos([]); // Clear the state
      toast.success('All todos deleted');
    } catch (error) {
      toast.error('Failed to delete all todos');
    }
  };

  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
        ))
      ) : (
        <p>No todos found</p>
      )}
      {todos.length > 0 && (
        <button onClick={handleDeleteAll} className="delete-all-btn">
          Delete All Todos
        </button>
      )}
    </div>
  );
};

export default TodoList;
