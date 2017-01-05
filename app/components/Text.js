import React from 'react';

const Text = React.createClass({
  render() {
    return (
      <div>
        <div>{this.props.msg}</div> 
      </div>
    );
  }
});

module.exports = Text;