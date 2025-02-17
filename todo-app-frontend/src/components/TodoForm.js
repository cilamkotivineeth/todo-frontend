// src/components/TodoForm.js
import React, { useState } from 'react';
import { addTodo } from '../api/api';
import { toast } from 'react-toastify';

const TodoForm = ({ setTodos, todos }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description) return toast.error('Please enter a description');
    
    try {
      const response = await addTodo({ description });
      toast.success('Todo added successfully');
      
      // Add the new todo to the state
      setTodos([...todos, response.data]); // This will update the todos state without re-fetching
      setDescription(''); // Clear the input field
    } catch (error) {
      toast.error('Failed to add todo');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a new todo"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
