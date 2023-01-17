import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from './componets/Quotes';
import { ChakraProvider } from '@chakra-ui/react'

import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Quotes />
    </div>
    </ChakraProvider>
  );
}

export default App;
