import React from 'react';
import {TopNavBar,TopNavSocial} from '../components/TopNavLists';

class TopNav extends React.Component{
  render (){
    return(
      <div>
        
        <div className='top-nav'>
          <h1 className='top-logo'>Blogological</h1>
          <TopNavBar customClass='top-nav-bar' />    
          <TopNavSocial customClass='top-nav-social' />    
          <p className='top-slogan'>Hip Hop 4 Better Dayz</p>
        </div>
      
      </div>
    );
  }
};

export default TopNav;