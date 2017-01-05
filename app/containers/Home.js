import React from 'react';
import TopNav from './TopNav'

const Home = React.createClass({
  render() {
    return (
      <div>
        <TopNav />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Home;