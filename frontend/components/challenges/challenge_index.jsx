import React from 'react';

class ChallengeIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {challenges: props.challenges};
  }
  componentDidMount()
  {
    console.log(this.props);
    this.props.fetchChallenges();
  }
  componentWillReceiveProps(newProps){
    this.setState({ challenges: newProps.challenges });
  }
  render(){
    return (
      <div className = "challenge-index">
        {this.state.challenges.map( el => (
          <div className = "challenge-item">
            {el.title}
            {el.tags}
          </div>
        ))}
      </div>
    );
  }
}
export default ChallengeIndex;