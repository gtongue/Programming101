import React from 'react';
import UserInfo from './user_info';
import CompletedChallenges from './completed_challenges';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchCompletedChallenges();
    this.props.fetchChallenges();
  }
//
  render(){
    const urls  = [
      "http://tinygraphs.com/labs/isogrids/hexa16/dja?theme=seascape&numcolors=2&size=500&fmt=svg",
      "http://tinygraphs.com/labs/isogrids/hexa16/asc?theme=duskfalling&numcolors=2&size=500&fmt=svg",
      "http://tinygraphs.com/labs/isogrids/hexa16/zsdrta?theme=bythepool&numcolors=2&size=500&fmt=svg"
    ];
    return (
      <div className = "home cf">
        <div className = "home-welcome">
        <div>
          <UserInfo 
            messages = {["Welcome back: " + this.props.user.username]} 
            username = {this.props.user.username}
            onClick = {() => this.props.history.push(`/users/${this.props.user.id}`)}
            onClickIcon = {() => this.props.history.push(`/users/${this.props.user.id}`)}
            style = {{marginLeft: 0}}/>
          
          <div className = "home-date">
            {(new Date()).toDateString()}
          </div>
        </div>
        <div className = "home-all-challenges" onClick = {() => this.props.history.push("/challenges")}>
          <h1>Go to all challenges</h1>
        </div>
        </div>
        <CompletedChallenges completedChallenges = {this.props.completedChallenges} history = {this.props.history}/>
        <div className = "home-challenge-container">
          {this.props.challenges.slice(0,3).map((challenge, idx) => (
            <div key = {challenge.id} className = "home-challenge" onClick = {() => this.props.history.push(`challenges/${challenge.id}`)}>
              <div className = "image-container">
                <img 
                  src={urls[idx]}
                  alt=""
                  className = "challenge-image"/>
              </div>
              <div className = {`challenge-top gradient${idx+1}`}>
                <div className = "challenge-header">
                  <h1>
                    {challenge.title}
                  </h1>
                  <h2>
                    {challenge.description}
                  </h2>
                </div>
              </div>
              <div className = "challenge-bottom">
                <div className = "challenge-tags">
                  <div className = "challenge-language">
                    {challenge.language_name}
                  </div>
                  {challenge.tags.map(tag => (
                    <div key = {challenge.id + " " + tag} className = "challenge-tag">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;