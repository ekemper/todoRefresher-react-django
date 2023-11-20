import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './Header';
import { ColorProvider } from './ColorGenerator';

function App() {
  const queryClient = new QueryClient()


  return (
    <div className="App">

      <ColorProvider>
      
        <Header />

        <QueryClientProvider client={queryClient}>
          <TodoList />
        </QueryClientProvider>

      </ColorProvider>
    </div>
  );
}

export default App;
