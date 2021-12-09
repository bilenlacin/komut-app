import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Checkbox, Rate } from 'rsuite';
import HeartIcon from '@rsuite/icons/legacy/Heart';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,

        height: 30,
        width: 30,

        border: 'none',
        paddingBlock: '6.5 9.5',
        padding: 5,
        borderRadius: 40,
        fontSize: 30,
        letterSpacing: 0.9,
        position: 'absolute',
        top: -51,
        right: 0,
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
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        border: 'none',
        height: 30,
        width: 30,
        paddingBlock: '6.5 9.5',
        padding: 5,
        borderRadius: 40,
        fontSize: 30,
        letterSpacing: 0.9,
        position: 'absolute',
        top: -51,
        left: 'unset',
        right: 47,
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

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,

  responsive: [
    {
      breakpoint: 1365,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1046,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },

    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
function Products() {
  return (
    <div className='slickSlider'>
      <h4 className='productsTitle'>Products Near You</h4>
      <p className='cityText'>Your Selected Location is İzmir</p>
      <Slider {...settings}>
        <div>
          <div className='productCard'>
            <div style={{ marginBlockEnd: 12 }}>
              <div className='productCardImageDiv'>
                <Checkbox
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    marginInlineStart: 3,
                  }}
                />
                <Rate
                  max={1}
                  size={'xs'}
                  character={
                    <HeartIcon style={{ color: 'rgb(231, 232, 236)' }} />
                  }
                  color='red'
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    marginInlineStart: 260,
                    marginBlockStart: 4,
                  }}
                />
                <img
                  className='productImage'
                  src='https://www.woods-furniture.co.uk/images/products/standard/8362.jpg'
                  alt=''
                />
              </div>
              <div className='rentPriceDiv'>$11/ Week</div>
              <span className='big-semibold-text'>Vento Sofa Bed</span>
              <p className='small-textf'>Furniture</p>
              <Rate size={'xs'} readOnly defaultValue={4.5} allowHalf />
              <div className='bottomLine'></div>
              <p className='mediumText'>Deposit Amount</p>
              <p className='bigSemiboldText'>50$</p>
              <div className='bottomLine'></div>
              <div style={{ display: 'flex' }}>
                <svg
                  class='svg-icon'
                  width='17'
                  height='17'
                  viewBox='0 0 1024 1024'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M463.424 1030.4c-236.344-98.619-399.431-327.829-399.431-595.131 0-1.082 0.003-2.163 0.008-3.244l-0.001 0.167v-250.688c-0-0.043-0-0.094-0-0.145 0-38.706 25.623-71.428 60.832-82.128l0.608-0.159 346.048-95.424c7.009-2.313 15.077-3.647 23.456-3.647s16.447 1.334 24.002 3.802l-0.546-0.154 347.648 95.424c37.253 8.094 64.746 40.782 64.746 79.892 0 0.916-0.015 1.828-0.045 2.736l0.003-0.132v250.624c0.019 1.857 0.031 4.050 0.031 6.246 0 266.496-163.324 494.845-395.338 590.413l-4.245 1.548c-8.46 3.198-18.24 5.049-28.452 5.049-1.946 0-3.877-0.067-5.79-0.2l0.258 0.014c-1.769 0.141-3.83 0.221-5.91 0.221-10.019 0-19.602-1.866-28.422-5.269l0.54 0.183z'
                    fill='rgb(80, 201, 214)'
                  ></path>
                  <path
                    d='M369.92 465.408c-6.413-7.012-15.603-11.393-25.816-11.393-12.42 0-23.327 6.48-29.524 16.243l-0.084 0.142c-6.24 7.998-10.006 18.193-10.006 29.267 0 13.377 5.494 25.471 14.35 34.149l0.008 0.008 116.736 111.744c5.002 5.266 12.056 8.543 19.875 8.543 1.229 0 2.438-0.081 3.624-0.238l-0.139 0.015c8.797-0.843 16.757-3.832 23.536-8.433l-0.176 0.113 234.88-223.552c8.512-8.908 13.751-21.007 13.751-34.33 0-10.927-3.524-21.031-9.498-29.237l0.099 0.142c-6.578-9.548-17.45-15.727-29.766-15.727-10.040 0-19.12 4.106-25.654 10.731l-0.004 0.004-202.752 201.856z'
                    fill='rgb(255, 255, 255)'
                  ></path>
                </svg>
                <p className='small-textf' style={{ marginInlineStart: 10 }}>
                  Insurance Protected
                </p>
              </div>
              <div className='productOwner'>
                <div className='profileImageDiv'>
                  <img
                    className='profileImage'
                    src='https://ficquotes.com/images/characters/boromir-the-fellowship-of-the-ring-2001.jpg'
                    alt=''
                  />
                </div>
                <div>
                  <span className='smallest-light-text'>ad Posted By</span>
                  <p className='small-medium-text'>Faruk Güngör</p>
                </div>
              </div>
              <button className='defaultButtonProduct mainButtonProduct'>
                <p style={{ fontWeight: 700 }}>Rent Item</p>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className='productCard'>
            <div style={{ marginBlockEnd: 12 }}>
              <div className='productCardImageDiv'>
                <Checkbox
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    marginInlineStart: 3,
                  }}
                />
                <Rate
                  max={1}
                  size={'xs'}
                  character={
                    <HeartIcon style={{ color: 'rgb(231, 232, 236)' }} />
                  }
                  color='red'
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    marginInlineStart: 260,
                    marginBlockStart: 4,
                  }}
                />
                <img
                  className='productImage'
                  src='https://www.woods-furniture.co.uk/images/products/standard/8362.jpg'
                  alt=''
                />
              </div>
              <div className='rentPriceDiv'>$11/ Week</div>
              <span className='big-semibold-text'>Vento Sofa Bed</span>
              <p className='small-textf'>Furniture</p>
              <Rate size={'xs'} readOnly defaultValue={4.5} allowHalf />
              <div className='bottomLine'></div>
              <p className='mediumText'>Deposit Amount</p>
              <p className='bigSemiboldText'>50$</p>
              <div className='bottomLine'></div>
              <div style={{ display: 'flex' }}>
                <svg
                  class='svg-icon'
                  width='17'
                  height='17'
                  viewBox='0 0 1024 1024'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M463.424 1030.4c-236.344-98.619-399.431-327.829-399.431-595.131 0-1.082 0.003-2.163 0.008-3.244l-0.001 0.167v-250.688c-0-0.043-0-0.094-0-0.145 0-38.706 25.623-71.428 60.832-82.128l0.608-0.159 346.048-95.424c7.009-2.313 15.077-3.647 23.456-3.647s16.447 1.334 24.002 3.802l-0.546-0.154 347.648 95.424c37.253 8.094 64.746 40.782 64.746 79.892 0 0.916-0.015 1.828-0.045 2.736l0.003-0.132v250.624c0.019 1.857 0.031 4.050 0.031 6.246 0 266.496-163.324 494.845-395.338 590.413l-4.245 1.548c-8.46 3.198-18.24 5.049-28.452 5.049-1.946 0-3.877-0.067-5.79-0.2l0.258 0.014c-1.769 0.141-3.83 0.221-5.91 0.221-10.019 0-19.602-1.866-28.422-5.269l0.54 0.183z'
                    fill='rgb(80, 201, 214)'
                  ></path>
                  <path
                    d='M369.92 465.408c-6.413-7.012-15.603-11.393-25.816-11.393-12.42 0-23.327 6.48-29.524 16.243l-0.084 0.142c-6.24 7.998-10.006 18.193-10.006 29.267 0 13.377 5.494 25.471 14.35 34.149l0.008 0.008 116.736 111.744c5.002 5.266 12.056 8.543 19.875 8.543 1.229 0 2.438-0.081 3.624-0.238l-0.139 0.015c8.797-0.843 16.757-3.832 23.536-8.433l-0.176 0.113 234.88-223.552c8.512-8.908 13.751-21.007 13.751-34.33 0-10.927-3.524-21.031-9.498-29.237l0.099 0.142c-6.578-9.548-17.45-15.727-29.766-15.727-10.040 0-19.12 4.106-25.654 10.731l-0.004 0.004-202.752 201.856z'
                    fill='rgb(255, 255, 255)'
                  ></path>
                </svg>
                <p className='small-textf' style={{ marginInlineStart: 10 }}>
                  Insurance Protected
                </p>
              </div>
              <div className='productOwner'>
                <div className='profileImageDiv'>
                  <img
                    className='profileImage'
                    src='https://ficquotes.com/images/characters/boromir-the-fellowship-of-the-ring-2001.jpg'
                    alt=''
                  />
                </div>
                <div>
                  <span className='smallest-light-text'>ad Posted By</span>
                  <p className='small-medium-text'>Faruk Güngör</p>
                </div>
              </div>
              <button className='defaultButtonProduct mainButtonProduct'>
                <p style={{ fontWeight: 700 }}>Rent Item</p>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className='productCard'>
            <div style={{ marginBlockEnd: 12 }}>
              <div className='productCardImageDiv'>
                <Checkbox
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    marginInlineStart: 3,
                  }}
                />
                <Rate
                  max={1}
                  size={'xs'}
                  character={
                    <HeartIcon style={{ color: 'rgb(231, 232, 236)' }} />
                  }
                  color='red'
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    marginInlineStart: 260,
                    marginBlockStart: 4,
                  }}
                />
                <img
                  className='productImage'
                  src='https://www.woods-furniture.co.uk/images/products/standard/8362.jpg'
                  alt=''
                />
              </div>
              <div className='rentPriceDiv'>$11/ Week</div>
              <span className='big-semibold-text'>Vento Sofa Bed</span>
              <p className='small-textf'>Furniture</p>
              <Rate size={'xs'} readOnly defaultValue={4.5} allowHalf />
              <div className='bottomLine'></div>
              <p className='mediumText'>Deposit Amount</p>
              <p className='bigSemiboldText'>50$</p>
              <div className='bottomLine'></div>
              <div style={{ display: 'flex' }}>
                <svg
                  class='svg-icon'
                  width='17'
                  height='17'
                  viewBox='0 0 1024 1024'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M463.424 1030.4c-236.344-98.619-399.431-327.829-399.431-595.131 0-1.082 0.003-2.163 0.008-3.244l-0.001 0.167v-250.688c-0-0.043-0-0.094-0-0.145 0-38.706 25.623-71.428 60.832-82.128l0.608-0.159 346.048-95.424c7.009-2.313 15.077-3.647 23.456-3.647s16.447 1.334 24.002 3.802l-0.546-0.154 347.648 95.424c37.253 8.094 64.746 40.782 64.746 79.892 0 0.916-0.015 1.828-0.045 2.736l0.003-0.132v250.624c0.019 1.857 0.031 4.050 0.031 6.246 0 266.496-163.324 494.845-395.338 590.413l-4.245 1.548c-8.46 3.198-18.24 5.049-28.452 5.049-1.946 0-3.877-0.067-5.79-0.2l0.258 0.014c-1.769 0.141-3.83 0.221-5.91 0.221-10.019 0-19.602-1.866-28.422-5.269l0.54 0.183z'
                    fill='rgb(80, 201, 214)'
                  ></path>
                  <path
                    d='M369.92 465.408c-6.413-7.012-15.603-11.393-25.816-11.393-12.42 0-23.327 6.48-29.524 16.243l-0.084 0.142c-6.24 7.998-10.006 18.193-10.006 29.267 0 13.377 5.494 25.471 14.35 34.149l0.008 0.008 116.736 111.744c5.002 5.266 12.056 8.543 19.875 8.543 1.229 0 2.438-0.081 3.624-0.238l-0.139 0.015c8.797-0.843 16.757-3.832 23.536-8.433l-0.176 0.113 234.88-223.552c8.512-8.908 13.751-21.007 13.751-34.33 0-10.927-3.524-21.031-9.498-29.237l0.099 0.142c-6.578-9.548-17.45-15.727-29.766-15.727-10.040 0-19.12 4.106-25.654 10.731l-0.004 0.004-202.752 201.856z'
                    fill='rgb(255, 255, 255)'
                  ></path>
                </svg>
                <p className='small-textf' style={{ marginInlineStart: 10 }}>
                  Insurance Protected
                </p>
              </div>
              <div className='productOwner'>
                <div className='profileImageDiv'>
                  <img
                    className='profileImage'
                    src='https://ficquotes.com/images/characters/boromir-the-fellowship-of-the-ring-2001.jpg'
                    alt=''
                  />
                </div>
                <div>
                  <span className='smallest-light-text'>ad Posted By</span>
                  <p className='small-medium-text'>Faruk Güngör</p>
                </div>
              </div>
              <button className='defaultButtonProduct mainButtonProduct'>
                <p style={{ fontWeight: 700 }}>Rent Item</p>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className='productCard'>
            <div style={{ marginBlockEnd: 12 }}>
              <div className='productCardImageDiv'>
                <Checkbox
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    marginInlineStart: 3,
                  }}
                />
                <Rate
                  max={1}
                  size={'xs'}
                  character={
                    <HeartIcon style={{ color: 'rgb(231, 232, 236)' }} />
                  }
                  color='red'
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    marginInlineStart: 260,
                    marginBlockStart: 4,
                  }}
                />
                <img
                  className='productImage'
                  src='https://www.woods-furniture.co.uk/images/products/standard/8362.jpg'
                  alt=''
                />
              </div>
              <div className='rentPriceDiv'>$11/ Week</div>
              <span className='big-semibold-text'>Vento Sofa Bed</span>
              <p className='small-textf'>Furniture</p>
              <Rate size={'xs'} readOnly defaultValue={4.5} allowHalf />
              <div className='bottomLine'></div>
              <p className='mediumText'>Deposit Amount</p>
              <p className='bigSemiboldText'>50$</p>
              <div className='bottomLine'></div>
              <div style={{ display: 'flex' }}>
                <svg
                  class='svg-icon'
                  width='17'
                  height='17'
                  viewBox='0 0 1024 1024'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M463.424 1030.4c-236.344-98.619-399.431-327.829-399.431-595.131 0-1.082 0.003-2.163 0.008-3.244l-0.001 0.167v-250.688c-0-0.043-0-0.094-0-0.145 0-38.706 25.623-71.428 60.832-82.128l0.608-0.159 346.048-95.424c7.009-2.313 15.077-3.647 23.456-3.647s16.447 1.334 24.002 3.802l-0.546-0.154 347.648 95.424c37.253 8.094 64.746 40.782 64.746 79.892 0 0.916-0.015 1.828-0.045 2.736l0.003-0.132v250.624c0.019 1.857 0.031 4.050 0.031 6.246 0 266.496-163.324 494.845-395.338 590.413l-4.245 1.548c-8.46 3.198-18.24 5.049-28.452 5.049-1.946 0-3.877-0.067-5.79-0.2l0.258 0.014c-1.769 0.141-3.83 0.221-5.91 0.221-10.019 0-19.602-1.866-28.422-5.269l0.54 0.183z'
                    fill='rgb(80, 201, 214)'
                  ></path>
                  <path
                    d='M369.92 465.408c-6.413-7.012-15.603-11.393-25.816-11.393-12.42 0-23.327 6.48-29.524 16.243l-0.084 0.142c-6.24 7.998-10.006 18.193-10.006 29.267 0 13.377 5.494 25.471 14.35 34.149l0.008 0.008 116.736 111.744c5.002 5.266 12.056 8.543 19.875 8.543 1.229 0 2.438-0.081 3.624-0.238l-0.139 0.015c8.797-0.843 16.757-3.832 23.536-8.433l-0.176 0.113 234.88-223.552c8.512-8.908 13.751-21.007 13.751-34.33 0-10.927-3.524-21.031-9.498-29.237l0.099 0.142c-6.578-9.548-17.45-15.727-29.766-15.727-10.040 0-19.12 4.106-25.654 10.731l-0.004 0.004-202.752 201.856z'
                    fill='rgb(255, 255, 255)'
                  ></path>
                </svg>
                <p className='small-textf' style={{ marginInlineStart: 10 }}>
                  Insurance Protected
                </p>
              </div>
              <div className='productOwner'>
                <div className='profileImageDiv'>
                  <img
                    className='profileImage'
                    src='https://ficquotes.com/images/characters/boromir-the-fellowship-of-the-ring-2001.jpg'
                    alt=''
                  />
                </div>
                <div>
                  <span className='smallest-light-text'>ad Posted By</span>
                  <p className='small-medium-text'>Faruk Güngör</p>
                </div>
              </div>
              <button className='defaultButtonProduct mainButtonProduct'>
                <p style={{ fontWeight: 700 }}>Rent Item</p>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className='productCard'>
            <div style={{ marginBlockEnd: 12 }}>
              <div className='productCardImageDiv'>
                <Checkbox
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    marginInlineStart: 3,
                  }}
                />
                <Rate
                  max={1}
                  size={'xs'}
                  character={
                    <HeartIcon style={{ color: 'rgb(231, 232, 236)' }} />
                  }
                  color='red'
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    marginInlineStart: 260,
                    marginBlockStart: 4,
                  }}
                />
                <img
                  className='productImage'
                  src='https://www.woods-furniture.co.uk/images/products/standard/8362.jpg'
                  alt=''
                />
              </div>
              <div className='rentPriceDiv'>$11/ Week</div>
              <span className='big-semibold-text'>Vento Sofa Bed</span>
              <p className='small-textf'>Furniture</p>
              <Rate size={'xs'} readOnly defaultValue={4.5} allowHalf />
              <div className='bottomLine'></div>
              <p className='mediumText'>Deposit Amount</p>
              <p className='bigSemiboldText'>50$</p>
              <div className='bottomLine'></div>
              <div style={{ display: 'flex' }}>
                <svg
                  class='svg-icon'
                  width='17'
                  height='17'
                  viewBox='0 0 1024 1024'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M463.424 1030.4c-236.344-98.619-399.431-327.829-399.431-595.131 0-1.082 0.003-2.163 0.008-3.244l-0.001 0.167v-250.688c-0-0.043-0-0.094-0-0.145 0-38.706 25.623-71.428 60.832-82.128l0.608-0.159 346.048-95.424c7.009-2.313 15.077-3.647 23.456-3.647s16.447 1.334 24.002 3.802l-0.546-0.154 347.648 95.424c37.253 8.094 64.746 40.782 64.746 79.892 0 0.916-0.015 1.828-0.045 2.736l0.003-0.132v250.624c0.019 1.857 0.031 4.050 0.031 6.246 0 266.496-163.324 494.845-395.338 590.413l-4.245 1.548c-8.46 3.198-18.24 5.049-28.452 5.049-1.946 0-3.877-0.067-5.79-0.2l0.258 0.014c-1.769 0.141-3.83 0.221-5.91 0.221-10.019 0-19.602-1.866-28.422-5.269l0.54 0.183z'
                    fill='rgb(80, 201, 214)'
                  ></path>
                  <path
                    d='M369.92 465.408c-6.413-7.012-15.603-11.393-25.816-11.393-12.42 0-23.327 6.48-29.524 16.243l-0.084 0.142c-6.24 7.998-10.006 18.193-10.006 29.267 0 13.377 5.494 25.471 14.35 34.149l0.008 0.008 116.736 111.744c5.002 5.266 12.056 8.543 19.875 8.543 1.229 0 2.438-0.081 3.624-0.238l-0.139 0.015c8.797-0.843 16.757-3.832 23.536-8.433l-0.176 0.113 234.88-223.552c8.512-8.908 13.751-21.007 13.751-34.33 0-10.927-3.524-21.031-9.498-29.237l0.099 0.142c-6.578-9.548-17.45-15.727-29.766-15.727-10.040 0-19.12 4.106-25.654 10.731l-0.004 0.004-202.752 201.856z'
                    fill='rgb(255, 255, 255)'
                  ></path>
                </svg>
                <p className='small-textf' style={{ marginInlineStart: 10 }}>
                  Insurance Protected
                </p>
              </div>
              <div className='productOwner'>
                <div className='profileImageDiv'>
                  <img
                    className='profileImage'
                    src='https://ficquotes.com/images/characters/boromir-the-fellowship-of-the-ring-2001.jpg'
                    alt=''
                  />
                </div>
                <div>
                  <span className='smallest-light-text'>ad Posted By</span>
                  <p className='small-medium-text'>Faruk Güngör</p>
                </div>
              </div>
              <button className='defaultButtonProduct mainButtonProduct'>
                <p style={{ fontWeight: 700 }}>Rent Item</p>
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Products;
