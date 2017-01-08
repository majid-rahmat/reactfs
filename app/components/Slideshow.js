import React from 'react';

class Slideshow extends React.Component{
	render(){
		return(
		<div>
        	<img className={this.props.customClass} src={this.props.src} /> 
      	</div>
		);
	}
};

export default Slideshow;