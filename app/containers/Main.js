import React from 'react';
import TopNavContainer from './TopNavContainer';
import FooterContainer from './FooterContainer';

const Main = React.createClass({
  render() {
    return (
      <div>
        <TopNavContainer />
        {this.props.children}
        <FooterContainer />
      </div>
    );
  }
});

module.exports = Main;