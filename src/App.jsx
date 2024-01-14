import './App.css';
import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/index.jsx';
import Research from './components/pages/Research/index.jsx';
import Staff from './components/pages/Staff/index.jsx';
import Teachers from './components/pages/Teachers/index.jsx';
import Experiment from './components/pages/Experiment/index.jsx';
import Text1 from './components/pages/Experiment/Text1.jsx';
import Text2 from './components/pages/Experiment/Text2.jsx';
import Text3 from './components/pages/Experiment/Text3.jsx';
import Text4 from './components/pages/Experiment/Text4.jsx';
import Text5 from './components/pages/Experiment/Text5.jsx';
import Text6 from './components/pages/Experiment/Text6.jsx';
import Text7 from './components/pages/Experiment/Text7.jsx';
import Text8 from './components/pages/Experiment/Text8.jsx';
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
          <Route path="staff/:tabId" element={<Staff />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="experiment-2024" element={<Experiment />} />
          <Route path="experiment-text-1" element={<Text1 />} />
          <Route path="experiment-text-2" element={<Text2 />} />
          <Route path="experiment-text-3" element={<Text3 />} />
          <Route path="experiment-text-4" element={<Text4 />} />
          <Route path="experiment-text-5" element={<Text5 />} />
          <Route path="experiment-text-6" element={<Text6 />} />
          <Route path="experiment-text-7" element={<Text7 />} />
          <Route path="experiment-text-8" element={<Text8 />} />
          <Route path="photos" element={<Photos />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
