import React from 'react';
import {Link} from 'react-router';

const TableOfContents = React.createClass ({
    render(){
    return (
    	<div>
            <ul>
              <li>Table of Contents</li> 
              <Link to='/hhandi/hhandi1'><li>Why Rap 1</li></Link>
              <li>Why Rap 2</li>
            </ul>
    	</div>      
    );
  }
});

module.exports = TableOfContents