import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href='/interests'>Interests</a>
        <a href='/work'>Work</a>
        <a href='/about'>About</a>
      </div>
    );
  }
}

export default Header;
