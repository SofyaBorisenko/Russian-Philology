import './App.css';
import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/index.js';
import Research from './components/pages/Research/index.js';
import Staff from './components/pages/Staff/index.js';
import Teachers from './components/pages/Teachers/index.js';
import News from './components/pages/News/index.js';
import Photos from './components/pages/Photos/index.js';
import Contacts from './components/pages/Contacts/index.js';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          {/* Set the HomePage as the default page */}
          <Route index element={<HomePage />} />
          {/* Other routes */}
          <Route path="research" element={<Research />} />
          <Route path="staff" element={<Staff />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="news" element={<News />} />
          <Route path="photos" element={<Photos />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App;
