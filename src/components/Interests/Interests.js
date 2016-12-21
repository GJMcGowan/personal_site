import React, { Component } from 'react';

import CentreBox from '../CentreBox/CentreBox';

class Interests extends Component {
  render() {
    return (
      <CentreBox>
        <ul>
          <li>Board Games</li>
          <li>Effective Altruism</li>
        </ul>
      </CentreBox>
    );
  }
}

export default Interests;
