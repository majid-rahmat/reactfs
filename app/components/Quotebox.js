import React from 'react';

class Quotebox extends React.Component{
	render(){
		return(
		<div>
    		<blockquote>{this.props.quote}</blockquote>
  		</div>  
		);
	}
};

export default Quotebox;