import React from 'react';

function FooterComponent(props) {
  	return (
		<div>
    		{props.close}
    	</div>
  	);
};

export default FooterComponent;

// class FooterComponent extends React.Component{
// 	render(){
// 		return(
// 		<div>
//     		{this.props.close}
//     	</div> 
// 		);
// 	}
// };