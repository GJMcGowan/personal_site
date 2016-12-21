import React, { Component } from 'react';

import CentreBox from '../CentreBox/CentreBox';

class Interests extends Component {
  render() {
    return (
      <div className='col-xs-10 col-xs-offset-1 standard-container'>
        <ul>
          <li>Board Games</li>
          <li>Effective Altruism</li>
          <li>Cats</li>
        </ul>
      </div>
    );
  }
}

export default Interests;
