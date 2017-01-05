import React from 'react';
var Image = require('./Image');
var Text = require('./Text');
var Video = require('./Video');
var Slideshow = require('./Slideshow');

const Home = React.createClass({
  render() {
    return (
      <div>
        <Image src='../public/images/IHeartRap.jpg' /> 
      	<Text msg='Cue Blogological.com. This site strives to be a primary point of interaction between you and the rap world. It is a digital haven and sanctuary for all — from the battle-hardened hip hop head to the soon-to-be-Stan— and is a platform for YOUR active participation and engagement in showcasing the world, its wonders, and its people to its people!
        The site’s objectives are threefold; verbally, these are: to educate, to entertain, and to inspire. 
        Together, we will proliferate the positivity encapsulated within the musical Gemini- Rhythm And Poetry.
        Click here for more.' />
        <Text msg='Press play for a look at pop culture through marketing, branding and business strategy (or is it the other way round?!)
        Click here for more episodes' />
        <Video src='https://www.youtube.com/embed/08vEi-vhZIA' width='560' height='315' />
        <hr />
        <Slideshow src='../public/images/illmatic.jpg' />
      </div>
    );
  }
});

module.exports = Home;