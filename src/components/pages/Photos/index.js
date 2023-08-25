import React from 'react';
import Header from '../../layout/Header.js';
import Footer from '../../layout/Footer.js';
import MyImageGallery from './MyImageGallery.js';

function Photos() {
  return (
    <div>
      <Header />
      <MyImageGallery />
      <Footer />
    </div>
  );
}

export default Photos;