// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ToastContainer,  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTodos } from './api/api';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch initial todos from the API (you can use mock data if necessary)
    const fetchTodos = async () => {
      try {
        const response = await getTodos(); // Get todos from API
        setTodos(response.data);
      } catch (error) {
        toast.error('Failed to fetch todos');
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default App;
