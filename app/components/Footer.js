import React from 'react';
import FooterComponent from './FooterComponent';

function Footer(props) {
  	return (
		<div>
			<div className='ui inverted vertical footer segment ui fixed bottom'>
            	<div className="ui center aligned container">
            		<FooterComponent close='To Educate. To Entertain. To Inspire.' />
      			</div>
            </div>
        </div>
    );
};

export default Footer;