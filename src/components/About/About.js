import React, { Component } from 'react';

import './About.css';
import me from './me.jpg';
import Loader from '../Loader/Loader';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false
    };
  }

  onLoad() {
    this.setState({imageLoaded: true});
  }

  render() {
    return (
      <div className='col-xs-10 col-xs-offset-1 standard-container'>
        <div hidden={this.state.imageLoaded}>
          <Loader />
        </div>
        <div hidden={!this.state.imageLoaded}>
          <img
            src={me}
            className='img-fluid bio-image'
            alt='my face'
            onLoad={this.onLoad.bind(this)}/>
          <div className='bio-text'>
            <p>I'm a web developer, living in London</p>
            <p>I like minimalist websites :)</p>
            <p>Contact me on gemcgow (at) gmail (dot) com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
