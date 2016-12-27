import React, { Component } from 'react';
import boardGameCall from '../../utils/ApiUtils';

class BoardGames extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBoardGames: false
    }
  }

  componentDidMount() {
    debugger;
    boardGameCall();
  }

  renderBoardGames() {
    if (!this.state.showBoardGames) {
      return null;
    }

    // my collection is at url: https://boardgamegeek.com/xmlapi2/collection?username=gedusa

    const listOfGames = [
      'Settlers of Catan', 'Pandemic Legacy', 'Star Wars: Rebellion',
      'Labyrinth: The War on Terror', 'Twilight Struggle'
    ];

    return (
      <ul>
        {listOfGames.map((item, index) =>
          <li key={index}>{item}</li>
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
          I really like the <a href='https://en.wikipedia.org/wiki/Eurogame'>european</a> type of board game. Click for a
          list of all the board games I own.
        </p>
        <button
          className='btn btn-default'
          onClick={this.toggleBoardGames.bind(this)}>
          See what a nerd I am
        </button>
        {this.renderBoardGames()}
      </div>
    );
  }
}

export default BoardGames;
