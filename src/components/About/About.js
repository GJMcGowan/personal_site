import React, { Component } from 'react';

import CentreBox from '../CentreBox/CentreBox';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className='col-xs-10 col-xs-offset-1 standard-container'>
        <img src='/me.jpg' className='img-fluid bio-image' />
        <div className='bio-text'>
          <p>I'm a web developer, living in London</p>
        </div>
      </div>
    );
  }
}

export default About;
