// src/components/TodoItem.js
import React from 'react';
import { updateTodo, deleteTodo } from '../api/api';
import { toast } from 'react-toastify';

const TodoItem = ({ todo, setTodos, todos }) => {
  // Handle toggling the completion status
  const handleToggleCompletion = async () => {
    const updatedCompletionStatus = todo.completed === 0 ? 1 : 0;  // Toggle the completion status

    // Optimistically update the UI first
    const updatedTodo = { ...todo, completed: updatedCompletionStatus };
    setTodos(todos.map(t => t.id === todo.id ? updatedTodo : t));  // Update the state immediately

    // Send the update request to the backend
    try {
      const response = await updateTodo(todo.id, { completed: updatedCompletionStatus });
      if (response) {
        toast.success('Todo updated successfully');
      }
    } catch (error) {
      // If the API request fails, revert the UI update
      setTodos(todos.map(t => t.id === todo.id ? todo : t));
      toast.error('Failed to update todo');
    }
  };

  // Handle deleting a specific todo
  const handleDeleteTodo = async () => {
    try {
      await deleteTodo(todo.id); // Call API to delete the todo
      setTodos(todos.filter(t => t.id !== todo.id)); // Remove the deleted todo from the state
      toast.success('Todo deleted');
    } catch (error) {
      toast.error('Failed to delete todo');
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span>
        {todo.completed ? '✔️' : '❌'} {todo.description}
      </span>
      <button onClick={handleToggleCompletion}>
        {todo.completed === 0 ? 'Mark as Completed' : 'Mark as Incomplete'}
      </button>
      <button onClick={handleDeleteTodo}>Delete</button>
    </div>
  );
};

export default TodoItem;
