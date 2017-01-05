import React from 'react';

const Footer = React.createClass ({
    render(){
    return (
    	<div>
    		<div className='bottom-bar'>{this.props.close}</div>
    	</div>      
    );
  }
});

export default Footer