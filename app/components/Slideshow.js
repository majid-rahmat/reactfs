import React from 'react';

const Slideshow = React.createClass({
  render() {
    return (
      <div>
        <img className={this.props.customClass} src={this.props.src} /> 
      </div>
    );
  }
});

module.exports = Slideshow;