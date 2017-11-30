import React from 'react';
import {generateIcon} from '../../utils/user_icon_util';
import { Line, Doughnut } from 'react-chartjs-2';

class Show extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
    if(!this.props.user)
    {
      this.state = {
        username: "",
        numLines: 0,
        completedChallenges: [],
        linesOverTime: [],
        challengesOverTime: []
      };
    }else{
      this.state = {
        username: this.props.user.username,
        numLines: this.props.user.numLines,
        completedChallenges: this.props.user.completedChallenges,
        linesOverTime: this.props.user.linesOverTime,
        challengesOverTime: this.props.user.challengesOverTime
      };
    }
  }

  componentWillMount(){
    this.props.fetchUser();   
  }

  componentWillReceiveProps(newProps){
    this.setState({
      username: newProps.user.username,
      numLines: newProps.user.numLines,
      completedChallenges: newProps.user.completedChallenges,
      linesOverTime: newProps.user.linesOverTime,
      challengesOverTime: newProps.user.challengesOverTime
    });
  }

  render(){
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    const dodata = {
      labels: [
        'Red',
        'Green',
        'Yellow'
      ],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
      }]
    };
    return (
      <div className = "account-show cf">
        <div className = "account-title">
          <div className = "account-name">
            {generateIcon(this.state.username, 100, "account-image")}
            <h1>
              {this.state.username}
            </h1>
          </div>
          <h1>
            Lines of Code: {this.state.numLines}
          </h1>
          <h2>
            {this.state.completedChallenges.length} completed challenges
          </h2>
        </div>
        <div className = "account-completed">
          <h2> Completed Challenges </h2>
        </div>
        <div className = "account-info">
          <h2> Account Info </h2>
        </div>
        <div className = "account-stats">
          <div className = "account-line" >
            <Line data = {data} options = {{responsive: true, maintainAspectRatio: false}}/>
          </div>
          <div className = "account-doughnut">
            <Doughnut data = {dodata} options = {{responsive: true, maintainAspectRatio: false}}/>
          </div>
          <div className = "account-line" >
            <Line data = {data} options = {{responsive: true, maintainAspectRatio: false}}/>
          </div>
          <div className = "account-doughnut">
            <Doughnut data = {dodata} options = {{responsive: true, maintainAspectRatio: false}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;