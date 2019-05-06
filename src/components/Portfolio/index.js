
// import React from 'react'

// function Portfolio() {
//     return (
//       <h1>Portfolio is under construction.</h1>
//     )
// }

// export default Portfolio

import React, { Component } from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
class Portfolio extends Component {
  render() {
    return (
        <main>
          {/* <Filter /> */}
          <Shelf />
        </main>
    );
  }
}

export default Portfolio;
