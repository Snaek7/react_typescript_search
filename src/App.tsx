import React from 'react';
import Home from './pages/Home/index';
import DataProvider from '../src/context/Data/index';
import GlobalStyles from './styles/GlobalStyle';

function App() {
  return (
    <DataProvider>
      <GlobalStyles />
      <Home />
    </DataProvider>
  );
}

export default App;
