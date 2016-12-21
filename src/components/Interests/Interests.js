import React, { Component } from 'react';

class Interests extends Component {
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

    const listOfGames = ['Settlers of Catan', 'Pandemic Legacy', 'Star Wars: Rebellion'];
    // TODO: Add a fancy thing to lookup games on boardgamegeek (is there an API?)
    // TODO: Add more games in another file so this one doesn't get crowded

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
      <div className='multibox-container-top'>
        <div className='col-xs-10 col-xs-offset-1 multibox-container'>
          <h2>Board Games</h2>
          <p>
            I really like the european (Link) type of board game. Click for a
            list of all the board games I own.
          </p>
          <button
            className='btn btn-default'
            onClick={this.toggleBoardGames.bind(this)}>
            See what a nerd I am
          </button>
          {this.renderBoardGames()}
        </div>
        <div className='col-xs-10 col-xs-offset-1 multibox-container'>
          <h2>Effective Altruism</h2>
          <p>
            <a href='https://www.effectivealtruism.org/articles/introduction-to-effective-altruism/'>Effective Altruism</a> is
             a movement dedicated to thinking carefully about how best to help
             the world with our limited resources, and then doing that thing.
          </p>
          <p>
            <a href='/charity'>I donate significant amounts</a> to charities I
            think will do the most good for the world every year.
          </p>
        </div>
      </div>
    );
  }
}

export default Interests;
