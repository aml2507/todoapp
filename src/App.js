import React, { Component } from 'react';
import "./App.css";
import TodoList from './components/TodoList';
import Login from './Login';


function App() {
  {
    return (
      <div className='todo-app'>
        <h1>Welcome! </h1>
        <TodoList />
      </div>

    );
  }
}

export default App;

