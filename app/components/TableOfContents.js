import React from 'react';
import {Link} from 'react-router';

function TableOfContents(props) {
    return (
      <div>
            <ul className={props.customClass}>
              <li>Table of Contents</li> 
              <Link to='/hhandi/hhandi1'><li>Why Rap 1</li></Link>
              <li>Why Rap 2</li>
            </ul>
      </div>
    );
};

Image.propTypes={
	customClass: React.PropTypes.string
}

export default TableOfContents;