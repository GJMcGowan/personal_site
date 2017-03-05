import React from 'react';

import './BoardGameItem.css';

const BoardGameItem = (props) => {
  const { item } = props;
  return (
    <li className='col-sm-10 col-sm-offset-1 col-xs-12 column'>
      <div className='image-container'>
        <img
          src={item.imageSource}
          className='img-fluid boardgame-image'
          alt={item.name}/>
      </div>
      <span className='text-container'>
        {item.name}
      </span>
    </li>
  );
};

BoardGameItem.propTypes = {
  item: React.PropTypes.object.isRequired
};

export default BoardGameItem;
