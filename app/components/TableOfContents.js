import React from 'react';
import {Link} from 'react-router';

class TableOfContents extends React.Component{
  render(){
    return (
      <div>
            <ul className={this.props.customClass}>
              <li>Table of Contents</li> 
              <Link to='/hhandi/hhandi1'><li>Why Rap 1</li></Link>
              <li>Why Rap 2</li>
            </ul>
      </div>
    );
  }
};

export default TableOfContents;