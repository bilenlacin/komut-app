import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import Products from './Products';
import Comment from './Comment';
import Footer from './Footer';
import Navigation from './Navigation';
import Scrollbar from './Scrollbar';
import Carouselbar from './Carouselbar';

function Homepage() {
  return (
    <div className='homePage'>
      <Navigation />
      <div className='mainPage'>
        <Scrollbar />
        <Carouselbar />
        <Products />
        <Comment />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
