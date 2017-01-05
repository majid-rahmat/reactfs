import React from 'react';

const Video = React.createClass({
  render() {
    return (
    <div>
    	<iframe src={this.props.src} width={this.props.width} height={this.props.height} frameBorder="0" allowFullScreen></iframe>
    </div>  
    );
  }
});

module.exports = Video;