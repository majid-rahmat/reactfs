import React from 'react';
import Image from './Image';
import Text from './Text';
import Video from './Video';
import Slideshow from './Slideshow';
import SlideshowContainer from './SlideshowContainer'

function Home(props) {
    return (
    <div>
          <div className='home-header-container'>
            
            <div className='header-container'>
              <Image customClass='home-header-image' src='/app/public/images/IHeartRap.jpg' /> 
            </div>
            
            <div className='home-text-vid'>
              <Text customClass='home-header-text-top' msg='This site strives to be a primary point of interaction between you and the rap world. It is a digital haven and sanctuary for all — from the battle-hardened hip hop head to the soon-to-be-Stan— and is a platform for YOUR active participation and engagement in showcasing the world, its wonders, and its people to its people!
              The site’s objectives are threefold; verbally, these are: to educate, to entertain, and to inspire. 
              Together, we will proliferate the positivity encapsulated within the musical Gemini- Rhythm And Poetry.
              Click here for more.' />
              
              <div className='home-header-video-container'>
                <Text customClass='home-header-text-vid' msg='Press play for a look at pop culture through marketing, branding and business strategy (or is it the other way round?!)
                Click here for more episodes' />
                <Video customClass='home-header-vid' src='https://www.youtube.com/embed/08vEi-vhZIA' width='560' height='315' />
              </div>
            </div>
          </div>
          
          <hr />
          
          <div className='home-slideshow'>
            <SlideshowContainer />
          </div>

    </div>
    );
};

export default Home;

// class Home extends React.Component{
//   render(){
//     return(
//       <div>
  
//           <div className='home-header-container'>
            
//             <div className='header-container'>
//               <Image customClass='home-header-image' src='/app/public/images/IHeartRap.jpg' /> 
//             </div>
            
//             <div className='home-text-vid'>
//               <Text customClass='home-header-text-top' msg='This site strives to be a primary point of interaction between you and the rap world. It is a digital haven and sanctuary for all — from the battle-hardened hip hop head to the soon-to-be-Stan— and is a platform for YOUR active participation and engagement in showcasing the world, its wonders, and its people to its people!
//               The site’s objectives are threefold; verbally, these are: to educate, to entertain, and to inspire. 
//               Together, we will proliferate the positivity encapsulated within the musical Gemini- Rhythm And Poetry.
//               Click here for more.' />
              
//               <div className='home-header-video-container'>
//                 <Text customClass='home-header-text-vid' msg='Press play for a look at pop culture through marketing, branding and business strategy (or is it the other way round?!)
//                 Click here for more episodes' />
//                 <Video customClass='home-header-vid' src='https://www.youtube.com/embed/08vEi-vhZIA' width='560' height='315' />
//               </div>
//             </div>
//           </div>
          
//           <hr />
          
//           <div className='home-slideshow'>
//             <SlideshowContainer />
//           </div>

//       </div>
//     );
//   }
// };

// export default Home;