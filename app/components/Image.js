import React from 'react';

function Image(props) {
  	return(
		<div>
        	<img className={props.customClass} src={props.src} /> 
      	</div>
	);
};

export default Image;