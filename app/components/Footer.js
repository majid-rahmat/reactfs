import React from 'react';
import FooterComponent from './FooterComponent';

function Footer(props) {
  	return (
		<div>
            
            <div className='bottom-bar'>
                <FooterComponent close='To Educate. To Entertain. To Inspire.' />
            </div>
        
        </div>
  	);
};

export default Footer;

// class Footer extends React.Component{
//     render (){
//         return(
//             <div>
            
//             <div className='bottom-bar'>
//                 <FooterComponent close='To Educate. To Entertain. To Inspire.' />
//             </div>
        
//         </div> 
//         );
//     }
// };