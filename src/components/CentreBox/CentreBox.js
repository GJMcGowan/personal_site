import React from 'react';
import './CentreBox.css';

const CentreBox = (props) => (
  <div className='main'>
    <div className="center-box">
      <div className="text">
        {props.children}
      </div>
    </div>
  </div>
);

export default CentreBox;
