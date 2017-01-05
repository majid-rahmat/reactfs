import React from 'react';
import { Link } from 'react-router';

const TopNavBar = React.createClass({
  render() {
    return (
      <div>
      	<ul className='top-nav-bar'>
          <Link to='/'><li>Home |</li></Link>
          <Link to='/hhandi'><li>HH&I |</li></Link>
          <Link to='/episodes'><li>Episodes</li></Link>
      	</ul>
      </div>
    );
  }
});

const TopNavSocial = React.createClass({
  render() {
    return (
      <div>
        <ul className='top-nav-social'>
          <li><a href='#'><i className='fa fa-facebook-square fa-3x' aria-hidden='true'></i></a></li>
          <li><a href='#'><i className='fa fa-twitter fa-3x' aria-hidden='true'></i></a></li>
          <li><a href='#'><i className='fa fa-youtube fa-3x' aria-hidden='true'></i></a></li>
          <li><a href='#'><i className='fa fa-instagram fa-3x' aria-hidden='true'></i></a></li>
        </ul>
      </div>
    );
  }
});


module.exports = {TopNavBar, TopNavSocial};