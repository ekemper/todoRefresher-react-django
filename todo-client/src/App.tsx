import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo">Todos!</h1>
      </header>

      <TodoList/>
    </div>
  );
}

export default App;
