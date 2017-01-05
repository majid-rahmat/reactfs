import React from 'react';
import Footer from '../components/Footer';

const FooterContainer = React.createClass({
  render() {
    return (
      <div>
        <Footer close='To Educate. To Entertain. To Inspire.' />    
      </div>
    );
  }
});

module.exports = FooterContainer;