import React from 'react';
import TableOfContents from './TableOfContents';
import Text from './Text';

const Hhandi = React.createClass({
  render() {
    return (
    	<div>
    		<TableOfContents />
    		<Text msg='Rhythm And Poetry; that’s what rap literally and figuratively stands for. 
            The Big Apple cultivated these musical Gemini to create unforgettable, far-reaching musical memories. Dudes molded wax to discuss their inner demons, vent their frustrations, talk about the ills that continue to plague their societies, and brashly declare their ambitions, visions, and dreams.
            Click here to continue reading!'/>
    		<Text msg='About the Author: Majid Rahmat is a Pakistani-Canuck who founded Blogological while working on his MBA from Syracuse University.' />
    	</div>  
    );
  }
});

module.exports = Hhandi;