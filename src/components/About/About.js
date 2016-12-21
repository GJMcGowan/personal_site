import React, { Component } from 'react';

import CentreBox from '../CentreBox/CentreBox';
import './About.css';

class About extends Component {
  render() {
    return (
      <CentreBox>
        <div className='col-xs-10 col-xs-offset-1'>          
          <img src='/me.jpg' className='img-fluid bio-image' />
          <div className='bio-text'>
            <p>I'm George (you may know this already)</p>
            <p>I'm a web developer, living in London</p>
          </div>
        </div>
      </CentreBox>
    );
  }
}

export default About;
