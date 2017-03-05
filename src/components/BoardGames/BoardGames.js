import React, { Component } from 'react';

import BoardGameItem from '../BoardGameItem/BoardGameItem';

import pandemic from './pandemic.png';
import star_wars from './star_wars.png';
import twilight_struggle from './twilight_struggle.jpg';

class BoardGames extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBoardGames: false
    }
  }

  renderBoardGames() {
    if (!this.state.showBoardGames) {
      return null;
    }

    //TODO: Ideally add reviews, maybe links elsewhere?
    const listOfGames = [
      {name: 'Pandemic Legacy', imageSource: pandemic},
      {name: 'Star Wars: Rebellion', imageSource: star_wars},
      {name: 'Twilight Struggle', imageSource: twilight_struggle}
    ];

    return (
      <ul>
        {listOfGames.map((item, index) =>
          <BoardGameItem
            item={item}
            key={index} />
        )}
      </ul>
    )
  }

  toggleBoardGames() {
    this.setState({showBoardGames: !this.state.showBoardGames})
  }

  render() {
    return (
      <div className='col-xs-8 col-xs-offset-2 multibox-container'>
        <h2>Board Games</h2>
        <p>
          I love board games! Currently I'm playing a lot of two player games.
        </p>
        <button
          className='btn btn-default'
          onClick={this.toggleBoardGames.bind(this)}>
          See my favourite games
        </button>
        {this.renderBoardGames()}
      </div>
    );
  }
}

export default BoardGames;
