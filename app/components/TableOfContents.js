import React from 'react';
import {Link} from 'react-router';

const links = [

  {
    id: 0,
    name: 'Table of Contents'
  },
  {
    id: 1,
    link: '/hhandi/hiphopandi1', 
    name: 'Why Rap 1'
  },
  {
    id: 2,
    link: '/hhandi/hiphophandi2',
    name: 'Why Rap 2'
  }
];

function TableOfContents(props) {
    const listItems = links.map((object) =>
      <li key={ object.id }><Link to={object.link}>{object.name}</Link></li>
      );
    return (
      <div>
        <ul className={props.customClass}>{listItems}</ul>            
      </div>
    );
};

export default TableOfContents;