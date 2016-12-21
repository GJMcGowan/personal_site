import React, { Component } from 'react';

class Charity extends Component {
  render() {
    return (
      <div className='multibox-container-top'>
        <div className='col-xs-10 col-xs-offset-1 multibox-container'>
          <p>
            I am a member of <a href='https://www.givingwhatwecan.org'>Giving What We Can</a> which
            means I pledge to give away at least 10% of my income to charities that
            I think will benefit the world the most.
          </p>
          <p>
            I pledged to donate more than 10% because I felt able to do so, and
            wanted to make altruism a bigger part of my life.
          </p>
          <p>
            I encourage you to <a href='https://www.givingwhatwecan.org/get-involved/become-member'>become a member too</a>, there
            are over 2000 of us! :)
          </p>
        </div>
        <div className='col-xs-10 col-xs-offset-1 multibox-container'>
          <h2>2016 Donations</h2>
          <p>
            In 2016 I donated a total of £6,830.50 (inc Gift Aid).
          </p>
          <p>
            It was broken down as follows
          </p>
          <p>
            GRAPH
          </p>
        </div>
      </div>
    );
  }
}

export default Charity;
