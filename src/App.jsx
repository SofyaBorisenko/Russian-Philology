import './App.css';
import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/index.jsx';
import Research from './components/pages/Research/index.jsx';
import Staff from './components/pages/Staff/index.jsx';
import Teachers from './components/pages/Teachers/index.jsx';
import News from './components/pages/News/index.jsx';
import Photos from './components/pages/Photos/index.jsx';
import Contacts from './components/pages/Contacts/index.jsx';
import { ChakraProvider } from '@chakra-ui/react';


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
