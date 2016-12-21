import React, { Component } from 'react';
import './CentreBox.css';

class CentreBox extends Component {
  render() {
    return (
      <div className='main'>
        <div className="home-page">
          <div className="introduction">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default CentreBox;
