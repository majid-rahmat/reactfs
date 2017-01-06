import React from 'react';
import Quotebox from './Quotebox';
import Video from './Video';
import Text from './Text';

const Hhandi1 = React.createClass({
  render() {
    return (
      <div>
        <Quotebox quote='Lorem ipsum dolor.' />
        <Video src='https://www.youtube.com/embed/Jsb4EDtTDyk' width='560' height='315' />
        <Text msg='A "rather unique" look at marketing and rap... 
        In this introductory episode, we go over some basic marketing frameworks (4Ps, 3As, 3Cs) and fit 2pac and Biggie into them.
        We then view contemporary corporate strategy through Kanye Wests 2004 classic The College Dropout, closing with a special plea to Wale and Kendrick Lamar...Word to Drizzy and Cole' />
        <Quotebox quote='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, alias ut facere?' />
        <Video src='https://www.youtube.com/embed/08vEi-vhZIA' width='560' height='315' />
        <Text msg='The ruler is Back!
        First and second mover advantage is discussed in relation to Jay-Zs music and businesses as we see where and when he applies each. 
        Likewise, we see how Jigga has practically applied a couple of Warren Buffetts most famous pieces of advice and the rewards he has reaped.' />
        </div>
    );
  }
});

module.exports = Hhandi1;