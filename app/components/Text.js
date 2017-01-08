import React from 'react';

class Text extends React.Component {
	render (){
		return (
      		<div>
        		<div className={this.props.customClass}>{this.props.msg}</div> 
      		</div>
    	);	
	}
};

export default Text;