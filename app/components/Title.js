import React from 'react';

class Title extends React.Component{
	render (){
		return (
	    	<div>
	    		<h1 className={this.props.customClass}>{this.props.msg}</h1>
	    	</div>  
    	);
	}
};

export default Title;