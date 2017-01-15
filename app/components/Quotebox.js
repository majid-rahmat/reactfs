import React from 'react';

function Quotebox(props) {
  	return(
		<div>
    		<blockquote>{props.quote}</blockquote>
  		</div>  
	);
};

export default Quotebox;