import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './components/HomePage';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <HomePage />
      </div>
    </ChakraProvider>
  )
}

export default App;
