import React from 'react';

const Text = React.createClass({
  render() {
    return (
      <div>
        <div className={this.props.customClass}>{this.props.msg}</div> 
      </div>
    );
  }
});

module.exports = Text;