import React from 'react';
import FooterComponent from './FooterComponent';

class Footer extends React.Component{
    render (){
        return(
            <div>
            
            <div className='bottom-bar'>
                <FooterComponent close='To Educate. To Entertain. To Inspire.' />
            </div>
        
        </div> 
        );
    }
};

export default Footer;