import React from 'react';

import {
  Navbar,
  Nav,
  InputGroup,
  Input,
  SelectPicker,
  Button,
  Divider,
} from 'rsuite';

const styles = {
  height: 50,
};
function Navigation() {
  const productsData = [
    {
      label: 'Furniture',
      value: 'Furniture',
    },
    {
      label: 'Fitness',
      value: 'Fitness',
    },
    {
      label: 'Books',
      value: 'Books',
    },
  ];
  const citiesData = [
    {
      label: 'İstanbul',
      value: 'İstanbul',
    },
    {
      label: 'Ankara',
      value: 'Ankara',
    },
    {
      label: 'Trabzon',
      value: 'Trabzon',
    },
  ];

  return (
    <div className='headerBarDiv'>
      <div className='nav-wrapper'>
        <div className='navbarContentDiv'>
          <Navbar
            style={{
              height: '100%',
              display: 'flex',
              width: '100%',
              backgroundColor: 'white',
            }}
          >
            <Navbar.Brand
              href='#'
              style={{
                padding: 0,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src='https://uygunakiraladev.komut.team/static/media/company-name.52199d64.svg'
                alt=''
                className='brandLogo'
              />
            </Navbar.Brand>

            <Nav
              style={{ display: 'flex', alignItems: 'center', width: '100%' }}
            >
              <Nav.Item
                style={{
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  width: '61.4%',
                }}
              >
                {' '}
                <div
                  style={{
                    marginTop: 5,
                    marginLeft: 28,
                    marginRight: 16,
                    width: '100%',
                  }}
                >
                  <InputGroup inside style={styles}>
                    <InputGroup.Addon style={{ padding: 15 }}>
                      <img
                        src='https://uygunakiraladev.komut.team/static/media/search.d175b03f.svg'
                        alt=''
                      />
                    </InputGroup.Addon>
                    <Input
                      style={{
                        paddingLeft: 55,
                        backgroundColor: '#f8f8f8',
                      }}
                    />
                    <Divider
                      vertical
                      style={{
                        backgroundColor: '#d8d8d8!important',
                        height: 49,
                        margin: 0,
                      }}
                    />
                    <SelectPicker
                      data={productsData}
                      appearance='subtle'
                      placeholder='Select'
                      style={{
                        width: 81.69,
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#f8f8f8',
                        border: 'none',
                      }}
                      cleanable=''
                    />
                  </InputGroup>
                </div>
              </Nav.Item>

              <Nav.Item
                style={{
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 'auto',
                }}
              >
                {' '}
                <div>
                  <SelectPicker
                    data={citiesData}
                    appearance='subtle'
                    placeholder='Select City'
                    cleanable=''
                    style={{
                      width: 131,
                      height: '36',
                      borderRadius: '0!important',
                    }}
                  />
                </div>
              </Nav.Item>

              <Nav.Item
                appearance='inverse'
                style={{
                  paddingInline: 9,
                  backgroundColor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <button className='defaultButton mainButton'>
                  Post Ad
                  <div style={{ marginInlineStart: 4 }}>
                    <svg
                      class=''
                      width='25'
                      height='25'
                      viewBox='0 0 1024 1024'
                      xmlns='http://www.w3.org/2000/svg'
                      style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                      }}
                    >
                      <path
                        d='M512 938.667c-235.641 0-426.667-191.025-426.667-426.667s191.025-426.667 426.667-426.667c235.641 0 426.667 191.025 426.667 426.667v0c0 235.641-191.025 426.667-426.667 426.667v0zM469.333 469.333h-170.667v85.333h170.667v170.667h85.333v-170.667h170.667v-85.333h-170.667v-170.667h-85.333z'
                        fill='rgb(255, 255, 255)'
                        style={{ fill: 'white' }}
                      ></path>
                    </svg>
                  </div>
                </button>
              </Nav.Item>

              <Nav.Item
                style={{
                  padding: 0,
                  height: 'unset',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  appearance='subtle'
                  style={{
                    height: 56,
                    paddingLeft: 10,
                    borderRadius: 0,
                  }}
                >
                  <svg
                    class=''
                    width='15'
                    height='15'
                    viewBox='0 0 1024 1024'
                    xmlns='http://www.w3.org/2000/svg'
                    style={{
                      display: 'inline-block',
                      verticalAlign: 'middle',
                      marginBlockStart: -2,
                    }}
                  >
                    <path
                      d='M160.706 0c-88.010 0-160.706 72.696-160.706 160.706v702.588c0 88.010 72.696 160.706 160.706 160.706h200.706c33.267 0 60.235-26.968 60.235-60.235v0c0-33.267-26.968-60.235-60.235-60.235v0h-200.706c-22.903 0-40.235-17.333-40.235-40.235v-702.588c0-22.903 17.333-40.235 40.235-40.235h200.706c33.267 0 60.235-26.968 60.235-60.235v0c0-33.267-26.968-60.235-60.235-60.235v0h-200.706z'
                      style={{ fill: 'rgb(21, 33, 74)' }}
                    ></path>
                    <path
                      d='M714.529 200.764c-0.516-0.016-1.122-0.025-1.731-0.025-16.648 0-31.719 6.754-42.622 17.671l-0.001 0.001c-10.898 10.9-17.638 25.957-17.638 42.588s6.74 31.688 17.638 42.588l208.353 208.353-208.353 208.353c-10.933 10.906-17.697 25.987-17.697 42.647s6.764 31.741 17.696 42.646l0.001 0.001c10.9 10.898 25.957 17.638 42.588 17.638s31.688-6.74 42.588-17.638l251.059-251.059c10.861-10.895 17.577-25.928 17.577-42.529 0-16.66-6.763-31.741-17.693-42.646l-0.001-0.001-250.941-250.941c-10.489-10.504-24.835-17.154-40.732-17.645l-0.092-0.002z'
                      style={{ fill: 'rgb(21, 33, 74)' }}
                    ></path>
                    <path
                      d='M361.412 451.765c-33.267 0-60.235 26.968-60.235 60.235v0c0 33.267 26.968 60.235 60.235 60.235v0h602.353c33.267 0 60.235-26.968 60.235-60.235v0c0-33.267-26.968-60.235-60.235-60.235v0h-602.353z'
                      style={{ fill: 'rgb(21, 33, 74)' }}
                    ></path>
                  </svg>
                  <span style={{ marginInlineStart: 5, color: '#15214a' }}>
                    Login or Register
                  </span>
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
