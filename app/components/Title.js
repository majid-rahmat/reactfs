import React from 'react';

function Title(props) {
  	return (
	    <div>
	    	<h1 className={props.customClass}>{props.msg}</h1>
	    </div>  
    );
};

export default Title;