import React from 'react';
import {TopNavBar,TopNavSocial} from '../components/TopNavLists';

const TopNav = React.createClass({
  render() {
    return (
      <div>
        <h1 className='top-logo'>Blogological</h1>
        <TopNavBar />    
        <TopNavSocial />    
        <p className='top-slogan'>Hip Hop 4 Better Dayz</p>
      </div>
    );
  }
});

module.exports = TopNav;