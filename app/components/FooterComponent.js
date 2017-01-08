import React from 'react';

class FooterComponent extends React.Component{
	render(){
		return(
		<div>
    		{this.props.close}
    	</div> 
		);
	}
};

export default FooterComponent;