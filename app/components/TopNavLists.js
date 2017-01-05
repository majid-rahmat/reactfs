import React from 'react';
var styles = {
    color: "red"
  }


const NavBar = React.createClass({
  render() {
    return (
      <div>
      	<ul style={styles.container}>
          <li>Home | </li>
          <li>&nbsp; HH&I | </li>
          <li>&nbsp; Episodes </li>
      	</ul>
      </div>
    );
  }
});

const NavSocial = React.createClass({
  render() {
    return (
      <div>
        <ul style={styles.container}>
          <li><a href='#'><i className='fa fa-facebook-square fa-3x' aria-hidden='true'></i></a></li>
          <li><a href='#'><i className='fa fa-twitter fa-3x' aria-hidden='true'></i></a></li>
          <li><a href='#'><i className='fa fa-youtube fa-3x' aria-hidden='true'></i></a></li>
          <li><a href='#'><i className='fa fa-instagram fa-3x' aria-hidden='true'></i></a></li>
        </ul>
      </div>
    );
  }
});


module.exports = {NavBar, NavSocial};