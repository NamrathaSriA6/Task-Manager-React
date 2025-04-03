import React from 'react';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './components/TaskContext';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <Navbar />
      <div className="container mt-4">
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;