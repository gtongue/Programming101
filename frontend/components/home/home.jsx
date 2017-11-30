import React from 'react';
import UserInfo from './user_info';
import CompletedChallenges from './completed_challenges';
class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchCompletedChallenges();
  }

  render(){
    return (
      <div className = "home cf">
        <UserInfo messages = {[this.props.user.username]} username = {this.props.user.username}/>
        <CompletedChallenges completedChallenges = {this.props.completedChallenges} history = {this.props.history}/>
      </div>
    );
  }
}

export default Home;