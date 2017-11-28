import React from 'react';

class ChallengeIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {challenges: props.challenges};
  }

  componentDidMount()
  {
    this.props.fetchChallenges();
  }
  
  componentWillReceiveProps(newProps){
    this.setState({ challenges: newProps.challenges });
  }

  handleClick(id){
    return () => {
      this.props.history.push(`/challenges/${id}`);
    };
  }

  render(){
    return (
      <div className = "challenge-index">
        {this.state.challenges.map( challenge => (
          <div key = {challenge.id} 
              className = {
                this.props.completed.includes(challenge.id) ? 
                "challenge-item completed"  : 
                this.props.saved.includes(challenge.id) ?
                "challenge-item incomplete" :
                "challenge-item"
              }
              onClick = {this.handleClick(challenge.id)}>
            <div className = "challenge-title">
              {challenge.title}
            </div>
            <div className = "challenge-tags">
              {challenge.tags.map(tag => (
                <div key = {tag} className = "challenge-tag">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default ChallengeIndex;

