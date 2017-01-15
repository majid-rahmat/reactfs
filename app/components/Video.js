import React from 'react';

function Video(props) {
  	return(
		<div>
    		<iframe className={props.customClass} src={props.src} width={props.width} height={props.height} frameBorder="0" allowFullScreen></iframe>
    	</div> 
		);
};

export default Video;