import React from 'react';
import { Divider } from 'rsuite';
import Slider from 'react-slick';

function Comment() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',

          right: 'unset',
          top: '131%',
          left: 58,
        }}
        onClick={onClick}
      >
        <div>
          <div>
            <button class='rightArrow'>
              <div>
                <svg
                  class='svg-icon'
                  width='11'
                  height='11'
                  viewBox='0 0 1024 1024'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M271.143-0l-51.714 51.714 449.143 449.143-449.143 449.143 51.714 51.714 500.857-500.857-500.857-500.857z'
                    fill='rgb(21, 33, 74)'
                    style={{ fill: 'rgb(255, 255, 255)' }}
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',

          top: '131%',
          left: 10,
        }}
        onClick={onClick}
      >
        <div>
          <button className='leftArrow'>
            <div>
              <svg
                class='svg-icon'
                width='11'
                height='11'
                viewBox='0 0 1024 1024'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M720.223-0.033l-500.857 500.857 500.857 500.857 51.714-51.714-449.143-449.143 449.143-449.142-51.714-51.714z'
                  fill='rgb(21, 33, 74)'
                  style={{ fill: 'rgb(255, 255, 255)' }}
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className='commentsDisplayDiv'>
      <div className='commentsDisplayContent'>
        <div style={{ maxWidth: 375 }}>
          <img
            className='brandLogoComment'
            src='https://uygunakiraladev.komut.team/static/media/company-name.52199d64.svg'
            alt=''
          />
          <h2 className='commentHeader'>Over 1.5 Million happy Customers</h2>
          <p className='commentText'>
            Here's what they have to say about their Uygunakirala experience.
          </p>
        </div>
      </div>
      <Divider vertical style={{ height: '100%' }} />
      <div className='commentsDisplayContent'>
        <div style={{ maxWidth: 382, width: '100%', marginBlockEnd: 30 }}>
          <Slider {...settings}>
            <div style={{ display: 'flex' }}>
              <div className='commentDiv'>
                <div style={{ marginBlockEnd: 30 }}>
                  <p className='big-semibold-text'>Mehmet Polat Koçak</p>
                  <span className='small-text-role'>Frontend Developer</span>
                </div>
                <p style={{ color: 'rgba(21, 33, 74, 0.5)' }}>
                  This is simply unbelievable! Rental is the most valuable
                  business resource we have EVER purchased. Rental is both
                  attractive
                </p>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div className='commentDiv'>
                <div style={{ marginBlockEnd: 30 }}>
                  <p className='big-semibold-text'>Mehmet Polat Koçak</p>
                  <span className='small-text-role'>Frontend Developer</span>
                </div>
                <p style={{ color: 'rgba(21, 33, 74, 0.5)' }}>
                  This is simply unbelievable! Rental is the most valuable
                  business resource we have EVER purchased. Rental is both
                  attractive
                </p>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div className='commentDiv'>
                <div style={{ marginBlockEnd: 30 }}>
                  <p className='big-semibold-text'>Mehmet Polat Koçak</p>
                  <span className='small-text-role'>Frontend Developer</span>
                </div>
                <p style={{ color: 'rgba(21, 33, 74, 0.5)' }}>
                  This is simply unbelievable! Rental is the most valuable
                  business resource we have EVER purchased. Rental is both
                  attractive
                </p>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div className='commentDiv'>
                <div style={{ marginBlockEnd: 30 }}>
                  <p className='big-semibold-text'>Mehmet Polat Koçak</p>
                  <span className='small-text-role'>Frontend Developer</span>
                </div>
                <p style={{ color: 'rgba(21, 33, 74, 0.5)' }}>
                  This is simply unbelievable! Rental is the most valuable
                  business resource we have EVER purchased. Rental is both
                  attractive
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Comment;
