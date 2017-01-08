import React from 'react';
import Video from './Video';
import Title from './Title';
import Text from './Text';

class Episodes1 extends React.Component{
  render (){
    return (
      <div>
        <Video customClass='episode-vid' src='https://www.youtube.com/embed/Jsb4EDtTDyk' width='560' height='315' />
        <Title customClass='episode-title' msg='Episode 1 Transcript' />
        <Text customClass='episode-text' msg='A "rather unique" look at marketing and rap... 
        In this introductory episode, we go over some basic marketing frameworks (4Ps, 3As, 3Cs) and fit 2pac and Biggie into them.
        We then view contemporary corporate strategy through Kanye Wests 2004 classic The College Dropout, closing with a special plea to Wale and Kendrick Lamar...Word to Drizzy and Cole' />
      </div>
    );
  }
};

export default Episodes1;