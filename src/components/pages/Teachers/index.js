import React from 'react';
import Header from '../../layout/Header.js';
import Footer from '../../layout/Footer.js';
import Granik from './Granik.js';
import Kontsevaya from './Kontsevaya.js';
import Bondarenko from './Bondarenko.js';

function Teachers() {
  return (
    <div>
      <Header />
      <Granik />
      <Kontsevaya />
      <Bondarenko />
      <Footer />
    </div>
  );
}

export default Teachers;