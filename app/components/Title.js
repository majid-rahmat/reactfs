import React from 'react';

const Title = React.createClass({
  render() {
    return (
    	<div>
    		<h1 className={this.props.customClass}>{this.props.msg}</h1>
    	</div>  
    );
  }
});

module.exports = Title;