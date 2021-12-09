import React from 'react';
import { Carousel } from 'rsuite';

function Carouselbar() {
  return (
    <div className='carouselDiv'>
      <Carousel className='rs-carousel'>
        <div
          className='homePageCarouselItem'
          style={{
            backgroundImage:
              'url(' +
              'https://uygunakiraladev.komut.team/static/media/carousel-example.17671e5f.png' +
              ')',
          }}
        >
          <span className='small-semibold-text'>Furniture</span>
          <h1 className='h1'>Work Smarter Save Smarter</h1>
          <h4 className='h4-light'>Get %10 off every month</h4>
          <button className='defaultButtonMore'>Know More</button>
        </div>
        <div
          className='homePageCarouselItem'
          style={{
            backgroundImage:
              'url(' +
              'https://uygunakiraladev.komut.team/static/media/carousel-example.17671e5f.png' +
              ')',
          }}
        >
          <span className='small-semibold-text'>Furniture</span>
          <h1 className='h1'>Work Smarter Save Smarter</h1>
          <h4 className='h4-light'>Get %10 off every month</h4>
          <button className='defaultButtonMore'>Know More</button>
        </div>
      </Carousel>
    </div>
  );
}

export default Carouselbar;
