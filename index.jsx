import React from 'react';
import { render } from 'react-dom';
import routes from './app/config/routes.js';
// import Home from './app/components/Home.js'

render(routes, document.getElementById('app'))

// const Home = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>cool story bro</h1>
//       </div>
//     );
//   }
// });
