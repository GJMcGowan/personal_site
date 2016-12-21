import React from 'react';
import { Link } from 'react-router';
import './Header.css';

const Header = (props) => (
  <div className="header">
    <Link to='/interests'>Interests</Link>
    <Link to='/work'>Work</Link>
    <Link to='/about'>About</Link>
    {window.location.pathname !== '/' ?
      <Link className='home-link' to='/'>Home</Link> : null}
  </div>
);

export default Header;
