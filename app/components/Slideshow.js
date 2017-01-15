import React from 'react';

function Slideshow(props) {
const src = props.src;
	return (
	<div>
		<h1>🎤 The GOATs 🐐</h1>
	    <img src={src} />
	</div>
	);
};

export default Slideshow;