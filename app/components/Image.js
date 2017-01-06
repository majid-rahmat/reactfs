import React from 'react';

const Image = React.createClass({
  render() {
    return (
      <div>
        <img className={this.props.customClass} src={this.props.src} /> 
      </div>
    );
  }
});

module.exports = Image;