import React, { Component } from 'react';
import { Pie } from 'react-chartjs';

class Charity extends Component {
  render() {
    const data = [
      {
          value: 3300.00,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Centre for Effective Altruism"
      },
      {
          value: 2647.50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "80,000 Hours"
      },
      {
          value: 883,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "SCI"
      }
    ]

    const options = {
      legend: true
    }

    return (
      <div className='multibox-container-top'>
        <div className='col-xs-8 col-xs-offset-2 multibox-container'>
          <p>
            I am a member of <a target='_blank' href='https://www.givingwhatwecan.org'>Giving What We Can</a> whose
            members pledge to give at least 10% of their income to charities they
            believe are most effective at helping people.
          </p>
          <p>
            I pledged to donate more than 10% because I felt able to do so, and
            wanted to make altruism a bigger part of my life.
          </p>
          <p>
            I encourage you to <a target='_blank' href='https://www.givingwhatwecan.org/get-involved/become-member'>become a member too</a>, there
            are over 2000 of us! :)
          </p>
        </div>
        <div className='col-xs-8 col-xs-offset-2 multibox-container'>
          <h2>2016 Donations</h2>
          <p>
            In 2016 I donated a total of £6,830.50 (inc Gift Aid).
          </p>
          <p>
            <Pie data={data} options={options} />
          </p>
        </div>
      </div>
    );
  }
}

export default Charity;
