import React from 'react';

function Text(props) {
  	return (
	<div>
		<div className={props.customClass}>{props.msg}</div> 
	</div>
    );
};

export default Text;