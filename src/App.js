import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import TodoList from './components/TodoList';
import Login from './Login';


function App() {
  return (
    <div className='todo-app'>
      <h1>Welcome! </h1>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={() => <Login />} />
          <Route path='/todos' exact render={() => <TodoList />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

