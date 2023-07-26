import './App.css';
import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/index.js';
import Research from './components/pages/Research/index.js';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          {/* Set the HomePage as the default page */}
          <Route index element={<HomePage />} />
          {/* Other routes */}
          <Route path="/research" component={Research} />
          {/* Add routes for other pages */}
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App;
