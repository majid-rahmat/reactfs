import React from 'react';
import { Link } from 'react-router';

function TopNavBar(props) {
    return(
      <div>
        <ul className={props.customClass}>
          <Link to='/'><li>Home |</li></Link>
          <Link to='/hhandi'><li>HH&I |</li></Link>
          <Link to='/episodes'><li>Episodes</li></Link>
        </ul>
      </div>
    );
};

function TopNavSocial(props) {
    return(
      <div>
        <ul className={props.customClass}>
          <li><a href='#'><i className='fa fa-facebook-square fa-3x' aria-hidden='true'></i></a></li>
          <li><a href='#'><i className='fa fa-twitter fa-3x' aria-hidden='true'></i></a></li>
          <li><a href='#'><i className='fa fa-youtube fa-3x' aria-hidden='true'></i></a></li>
          <li><a href='#'><i className='fa fa-instagram fa-3x' aria-hidden='true'></i></a></li>
        </ul>
      </div>
    );
};

module.exports = {TopNavBar, TopNavSocial};