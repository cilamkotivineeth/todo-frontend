// src/api/api.js
import axios from 'axios';

const apiUrl = 'https://todo-app-77y7.onrender.com/todos'; // Your API endpoint

// Add a new todo
export const addTodo = async (todo) => {
  return await axios.post(apiUrl, todo);
};

// Fetch all todos
export const getTodos = async () => {
  return await axios.get(apiUrl);
};

// Update a todo (mark as completed or not completed)
export const updateTodo = async (id, todoData) => {
  return await axios.put(`${apiUrl}/${id}`, todoData);
};

// Delete a single todo
export const deleteTodo = async (id) => {
  return await axios.delete(`${apiUrl}/${id}`);
};

// Delete all todos
export const deleteAllTodos = async () => {
  return await axios.delete(apiUrl);
};
