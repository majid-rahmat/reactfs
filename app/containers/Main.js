import React from 'react';
import TopNavContainer from './TopNavContainer';
import FooterContainer from './FooterContainer';

function Main (props) {
  	return (
		<div>
        	<TopNavContainer />
        	{props.children}
        	<FooterContainer />
      	</div>
	);
}

export default Main;

// Main.propTypes={
// 	children: React.PropTypes. .isRequired
// };