import React from 'react';
import './App.css';
import TodoList from './TodoList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo">Todos!</h1>
      </header>
      <QueryClientProvider client={queryClient}>
        <TodoList />
      </QueryClientProvider>
    </div>
  );
}

export default App;
