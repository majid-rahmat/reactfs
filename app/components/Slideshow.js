import React from 'react';

const Slideshow = React.createClass({
  render() {
    return (
      <div>
        <img src={this.props.src} /> 
      </div>
    );
  }
});

module.exports = Slideshow;