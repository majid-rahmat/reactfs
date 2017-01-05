import React from 'react';
import {NavBar,NavSocial} from '../components/TopNavLists';

const TopNav = React.createClass({
  render() {
    return (
      <div>
        <h1>Blogological</h1>

        <NavBar />
    
      	<NavSocial />
    
        <p>Hip Hop 4 Better Dayz</p>

      </div>
    );
  }
});

module.exports = TopNav;