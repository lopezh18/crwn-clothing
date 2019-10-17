import React from 'react';

//functional because we don't need to store state nor do we need lifecycle methods at the moment. 

//needs container for menu
const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Hats</h1>
          <span className='subtitle'>Shop Now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Jackets</h1>
          <span className='subtitle'>Shop Now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Sweaters</h1>
          <span className='subtitle'>Shop Now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Womens</h1>
          <span className='subtitle'>Shop Now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Mens</h1>
          <span className='subtitle'>Shop Now</span>
        </div>
      </div>
    </div>
  </div>
)

export default HomePage