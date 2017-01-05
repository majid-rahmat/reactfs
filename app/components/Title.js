import React from 'react';

const Title = React.createClass({
  render() {
    return (
    	<div>
    		<h1>{this.props.msg}</h1>
    	</div>  
    );
  }
});

module.exports = Title;