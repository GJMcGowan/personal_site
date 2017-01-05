import React, { Component } from 'react';

import BoardGames from '../BoardGames/BoardGames.js';

class Interests extends Component {
  render() {
    return (
      <div className='multibox-container-top'>
        <BoardGames />
        <div className='col-xs-8 col-xs-offset-2 multibox-container'>
          <h2>Effective Altruism</h2>
          <p>
            I'm a big fan of <a target='_blank' href='https://www.effectivealtruism.org/articles/introduction-to-effective-altruism/'>Effective Altruism</a>,
             a movement dedicated to thinking carefully about how best to help
             the world with our limited resources.
          </p>
          <p>
            As part of this <a href='/charity'>I donate significant amounts</a> to charities I
            think will do the most good for the world every year.
          </p>
        </div>
      </div>
    );
  }
}

export default Interests;
