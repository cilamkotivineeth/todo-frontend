# Todo App Frontend

NOTE : Test this Deployed Links or URL's in any Browser so that it works properly.

Vercel Deployment
The frontend of the application has been deployed on Vercel. You can view the live application at:
https://todo-frontend-theta-liart.vercel.app/

The backend API URL mentioned in the provided code is:
https://todo-app-77y7.onrender.com/todos
This is where your backend (API) is hosted, and it provides endpoints to interact with the todos (e.g., adding, updating, deleting todos). Make sure the backend is up and running at this URL for the frontend to function correctly.

This is a simple Todo application built using React, with the backend API hosted on a remote server. The app allows users to add, update, delete individual todos, and delete all todos at once. It also features toast notifications for user feedback and uses Bootstrap for styling.

## Features
- Add a new todo.
- Mark todos as completed or incomplete.
- Delete individual todos.
- Delete all todos at once.
- Toast notifications for success or error messages.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making requests to the backend API.
- **React Toastify**: For showing toast notifications.
- **Bootstrap**: A CSS framework for responsive design.
- **Vercel**: Used for deploying the frontend app (hosted on Vercel).

## Project Structure

### `src/components`
- **`TodoForm.js`**: A form component that allows the user to input a new todo and submit it to the API.
- **`TodoItem.js`**: A component that represents an individual todo item. It allows marking a todo as completed or incomplete and deleting a todo.
- **`TodoList.js`**: A component that displays a list of all todos and includes a button to delete all todos at once.

### `src/api/api.js`
- Contains the functions to interact with the backend API:
  - **`addTodo`**: To add a new todo.
  - **`getTodos`**: To fetch all todos.
  - **`updateTodo`**: To update the status of a todo.
  - **`deleteTodo`**: To delete a single todo.
  - **`deleteAllTodos`**: To delete all todos.

### `src/App.js`
- The main App component that holds the state for todos and uses the `TodoForm` and `TodoList` components to display the todo list and manage new todos.

### `src/index.js`
- The entry point of the React app, which renders the App component into the DOM.

### `vercel.json`
- A configuration file for Vercel deployment, with a rewrite rule to redirect all requests to the root (`/`), typically used in single-page applications (SPA).

---

## Getting Started

To get the project up and running locally, follow these steps:

### Prerequisites
- Node.js (v16 or later) installed.
- A package manager like npm or yarn.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/todo-app-frontend.git
cd todo-app-frontend

