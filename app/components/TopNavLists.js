import React from 'react';
import { Link } from 'react-router';

class TopNavBar extends React.Component {
  render(){
    return(
      <div>
        <ul className={this.props.customClass}>
          <Link to='/'><li>Home |</li></Link>
          <Link to='/hhandi'><li>HH&I |</li></Link>
          <Link to='/episodes'><li>Episodes</li></Link>
        </ul>
      </div>
    );
  }
};

class TopNavSocial extends React.Component {
  render(){
    return(
      <div>
        <ul className={this.props.customClass}>
          <li><a href='#'><i className='fa fa-facebook-square fa-3x' aria-hidden='true'></i></a></li>
          <li><a href='#'><i className='fa fa-twitter fa-3x' aria-hidden='true'></i></a></li>
          <li><a href='#'><i className='fa fa-youtube fa-3x' aria-hidden='true'></i></a></li>
          <li><a href='#'><i className='fa fa-instagram fa-3x' aria-hidden='true'></i></a></li>
        </ul>
      </div>
    );
  }
};

module.exports = {TopNavBar, TopNavSocial};
// export default { TopNavBar, TopNavSocial}