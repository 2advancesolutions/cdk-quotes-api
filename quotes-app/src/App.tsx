import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from './componets/Quotes';
import { ChakraProvider } from '@chakra-ui/react'

import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})


function App() {
  return (
    <ChakraProvider theme={theme}>
    <div className="App">
      <Quotes />
    </div>
    </ChakraProvider>
  );
}

export default App;
