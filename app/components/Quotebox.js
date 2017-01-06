import React from 'react';

const Quotebox = React.createClass ({
    render(){
    return (
       <div>
       		<div className="content text-quotes">
    			<blockquote>{this.props.quote}</blockquote>
    		</div>
		</div>  
    );
  }
});


module.exports = Quotebox;