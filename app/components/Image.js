import React from 'react';

const Image = React.createClass({
  render() {
    return (
      <div>
        <img src={this.props.src} /> 
      </div>
    );
  }
});

module.exports = Image;