import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div className='multibox-container-top'>
        <div className='col-xs-8 col-xs-offset-2 multibox-container'>
          <p>I make websites, this is one of them</p>
          <p>To find more examples of my work, go <a target='_blank' href='https://github.com/GJMcGowan'>here</a></p>
          <p>I work at <a target='_blank' href='https://eu.deloittedigital.com/en/home'>Deloitte Digital</a> in the Front-End team</p>
        </div>
        <div className='col-xs-8 col-xs-offset-2 multibox-container'>
          <p>
            This site is made using React, which is my main interest at the moment. My day job is largely React/Redux projects.
          </p>
          <p>
            I'm also comfortable with Angular, and I've dabbled with Vue.
          </p>
          <p>
            I have some backend experience, largely with simple NodeJS servers. Sometimes I use Ruby & Ruby on Rails.
          </p>
        </div>
      </div>
    );
  }
}

export default Work;
