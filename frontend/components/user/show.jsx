import React from 'react';
import {generateIcon} from '../../utils/user_icon_util';
import { Line, Doughnut } from 'react-chartjs-2';

class Show extends React.Component{
  constructor(props){
    super(props);
    if(!this.props.user)
    {
      this.state = {
        username: "",
        numLines: 0,
        completedChallenges: [],
        linesOverTime: {
          data: [],
          labels: []
        },
        challengesOverTime: {
          data: [],
          labels: []
        },
        completionData: {
          challengesNum: 0,
          completedNum: 0
        }
      };
    }else{
      this.state = {
        username: this.props.user.username,
        numLines: this.props.user.numLines,
        completedChallenges: this.props.user.completedChallenges,
        linesOverTime: this.props.user.linesOverTime,
        challengesOverTime: this.props.user.challengesOverTime,
        completionData: this.props.user.completionData,
      };
    }
  }

  componentWillMount(){
    this.props.fetchUser(this.props.match.params.userId);   
  }

  componentWillReceiveProps(newProps){
    if(newProps.user){
      this.setState({
        username: newProps.user.username,
        numLines: newProps.user.numLines,
        completedChallenges: newProps.user.completedChallenges,
        linesOverTime: newProps.user.linesOverTime,
        challengesOverTime: newProps.user.challengesOverTime,
        completionData: newProps.user.completionData      
      });
    }else {
      this.props.fetchUser(newProps.match.params.userId);   
    }
  }

  render(){
    const challengesOvertime = {
      labels: this.state.challengesOverTime.labels,
      datasets: [
        {
          label: 'Challenges Over Time',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75, 192, 192, .4)',
          borderColor: 'black',
          borderCapStyle: 'butt',
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'white',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 0,
          pointHitRadius: 10,
          data: this.state.challengesOverTime.data
        }
      ]
    };
    const linesOverTime = {
      labels: this.state.linesOverTime.labels,
      datasets: [
        {
          label: 'Lines Written Over Time',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75, 192, 192, .4)',
          borderColor: 'black',
          borderCapStyle: 'butt',
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'white',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 0,
          pointHitRadius: 10,
          data: this.state.linesOverTime.data
        }
      ]
    };
    const completedData = {
      labels: [
        'Completed',
        'Left'
      ],
      datasets: [{
        data: [this.state.completionData.completedNum, 
          this.state.completionData.challengesNum - this.state.completionData.completedNum],
        backgroundColor: [
          '#126112',
          '#b61e1e',
        ],
        hoverBackgroundColor: [
          '#36A2EB',
          '#FF6384',
        ],
        borderColor: "#dadada",
        borderWidth: [5, 5]
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
          <div className = "account-completed-title">
            <h1> Completed Challenges </h1>
          </div>
          {this.state.completedChallenges.map((challenge) => (
            <div key = {challenge.challengeId} className = "account-complete-challenge" onClick = {() => this.props.history.push(`/challenges/${challenge.challengeId}`)}>
              <h2>
                {challenge.challengeName}
              </h2>
              <h2>
                {(new Date(challenge.completedAt)).toDateString()}
              </h2>
              <h2>
                Lines: {challenge.numberLines}
              </h2>
            </div>
          ))}
        </div>
        <div className = "account-stats">
          <div className = "account-left">
            <div className = "account-line" >
              <Line data = {challengesOvertime} options = {{responsive: true, maintainAspectRatio: false}}/>
            </div>
            <div className = "account-line" >
              <Line data = {linesOverTime} options = {{responsive: true, maintainAspectRatio: false}}/>
            </div>
          </div>
          <div className = "account-right">
            <div className = "account-doughnut">
              <Doughnut data = {completedData} options = {{responsive: true, maintainAspectRatio: false, cutoutPercentage: 70} }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;