import React from 'react';
import Home from './pages/Home/index';
import DataProvider from '../src/context/Data/index';

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
