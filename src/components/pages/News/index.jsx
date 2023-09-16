import React from 'react';
import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import './News.scss';

function News() {
  return (
    <div>
      <Header />
        <main className='news'>
            <p className='news'>Раздел в разработке</p>
        </main>
      <Footer />
    </div>
  );
}

export default News;