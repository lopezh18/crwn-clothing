import React from 'react';
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component.jsx'

//functional because we don't need to store state nor do we need lifecycle methods at the moment. 

//needs container for menu
const HomePage = () => (
  <div className='homepage'>
   <Directory/>
  </div>
)

export default HomePage;