import React from 'react';

class Video extends React.Component{
	render(){
		return(
		<div>
    		<iframe className={this.props.customClass} src={this.props.src} width={this.props.width} height={this.props.height} frameBorder="0" allowFullScreen></iframe>
    	</div> 
		);
	}
};

export default Video;