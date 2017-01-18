import React from 'react';

function Quotebox(props) {
  	return(
		<div>
    		<blockquote>{props.quote}</blockquote>
    		<cite>{props.say}</cite>
  		</div>  
	);
};

Quotebox.propTypes={
	quote: React.PropTypes.string,
	say: React.PropTypes.string
}

export default Quotebox;