import React from 'react';
import { Link } from 'react-router';

const links = [
  {
    id: 0,
    link: '/',
    name: 'Home |'
  },
  {
    id: 1,
    link: '/hhandi',
    name: 'HH&I |'
  },
  {
    id: 2,
    link: '/episodes',
    name: 'Episodes'
  }
];

function TopNavBar(props) {
    const listItems = links.map((object) =>
      <li key={ object.id }><Link to={object.link}>{object.name}</Link></li>
      );
    return (
      <div>
        <ul className={props.customClass}>{listItems}</ul>
            
      </div>
    );
};

const Social = [
  {
    id: 0,
    href: '#',
    className: 'fa fa-facebook-square fa-3x'
  },
  {
    id: 1,
    href: '#',
    className: 'fa fa-twitter fa-3x'
  },
  {
    id: 2,
    href: '#',
    className: 'fa fa-youtube fa-3x'
  },
  {
    id: 3,
    href: '#',
    className: 'fa fa-instagram fa-3x'
  }
];

function TopNavSocial(props) {
    const SocialItems = Social.map((object) =>
      <li key={ object.id }><a href={object.href}><i className={object.className} aria-hidden='true'></i></a></li>
      );
    return (
      <div>
        
        <ul className={props.customClass}>{SocialItems}</ul>
            
      </div>
    );
};

TopNavBar.propTypes={
  customClass: React.PropTypes.string
}

TopNavSocial.propTypes={
  customClass: React.PropTypes.string
}

module.exports = {TopNavBar, TopNavSocial};