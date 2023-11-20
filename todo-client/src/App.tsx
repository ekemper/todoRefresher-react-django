import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './Header';
import { ColorContext, defaultState } from './ColorGenerator';

function App() {
  const queryClient = new QueryClient()

  const [color, setColor] = useState<string>(defaultState.color);

  const getNewColor = () => {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return setColor(color);
  }

  return (
    <div className="App">

      <ColorContext.Provider value={{ color, getNewColor }}>

        <Header />

        <QueryClientProvider client={queryClient}>
          <TodoList />
        </QueryClientProvider>

      </ColorContext.Provider>
    </div>
  );
}

export default App;
