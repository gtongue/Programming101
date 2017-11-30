import React from 'react';

class Account extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = "account-show cf">
        <div className = "account-title">
          <h2>
            {this.props.user.username}
          </h2>
          <h1>
            Lines of Code: {this.props.user.numLines}
          </h1>
          <h2>
            {this.props.user.completedChallenges.length} completed challenges
          </h2>
        </div>
        <div className = "line"/>
        <div className = "account-completed">
          <h2> Completed Challenges </h2>
        </div>
        <div className = "account-info">
          <h2> Account Info </h2>
        </div>
        <div className = "account-stats">
          <h2> Account Stats </h2>
        </div>
      </div>
    );
  }
}

export default Account;