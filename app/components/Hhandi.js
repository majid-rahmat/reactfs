import React from 'react';
import TableOfContents from './TableOfContents';
import Text from './Text';

function Hhandi(props) {
    return (
        <div>
            
            <div className='hhandi-wrapper'>
                <TableOfContents customClass='table-of-contents' />
                <Text customClass='hhandi-top-text' msg='Rhythm And Poetry; that’s what rap literally and figuratively stands for. 
                The Big Apple cultivated these musical Gemini to create unforgettable, far-reaching musical memories. Dudes molded wax to discuss their inner demons, vent their frustrations, talk about the ills that continue to plague their societies, and brashly declare their ambitions, visions, and dreams.
                Click here to continue reading!'/>
                <Text customClass='hhandi-about-author' msg='About the Author: Majid Rahmat is a Pakistani-Canuck who founded Blogological while working on his MBA from Syracuse University.' />
            </div>
        
        </div>
    );
};


export default Hhandi;


// class Hhandi extends React.Component{
//     render (){
//         return (
//         <div>
            
//             <div className='hhandi-wrapper'>
//                 <TableOfContents customClass='table-of-contents' />
//                 <Text customClass='hhandi-top-text' msg='Rhythm And Poetry; that’s what rap literally and figuratively stands for. 
//                 The Big Apple cultivated these musical Gemini to create unforgettable, far-reaching musical memories. Dudes molded wax to discuss their inner demons, vent their frustrations, talk about the ills that continue to plague their societies, and brashly declare their ambitions, visions, and dreams.
//                 Click here to continue reading!'/>
//                 <Text customClass='hhandi-about-author' msg='About the Author: Majid Rahmat is a Pakistani-Canuck who founded Blogological while working on his MBA from Syracuse University.' />
//             </div>
        
//         </div>
//         );
//     }
// };
