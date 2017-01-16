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

Slideshow.propTypes = {
	src: React.PropTypes.string.isRequired
}

export default Slideshow;