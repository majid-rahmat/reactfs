import React from 'react';

function Quotebox(props) {
  	return(
		<div>
    		<blockquote>{props.quote}</blockquote>
  		</div>  
	);
};

Quotebox.propTypes={
	quote: React.PropTypes.string
}

export default Quotebox;