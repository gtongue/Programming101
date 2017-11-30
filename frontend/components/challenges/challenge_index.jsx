import React from 'react';

class ChallengeIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      challenges: props.challenges,
      search: ''
    };
    this.filterResults = this.filterResults.bind(this);
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

  handleSearch(){
    return (e) => {
      this.setState({ search: e.target.value });
    };
  }

  filterResults(){
    let filteredResult = [];
    this.state.challenges.forEach((challenge => {
      let searchString = challenge.tags.join(" ");
      searchString += " " + challenge.language_name;
      searchString += " " + challenge.title;

      if(searchString.toLowerCase().includes(this.state.search.toLowerCase()))
      {
        filteredResult.push(challenge);
      }
    }));
    return filteredResult;
  }

  render(){
    let searchResults = this.filterResults();
    return (
      <div className = "challenge-index">
        <div className = "challenge-search-container">
          <input 
            type = "text" 
            className = "challenge-search"
            placeholder = "Search"
            onChange = {this.handleSearch()} />
        </div>
        {this.state.challenges.map( challenge => (
          <div key = {challenge.id} 
              className = {
                (this.props.completed.includes(challenge.id) ? 
                "challenge-item completed"  : 
                this.props.saved.includes(challenge.id) ?
                "challenge-item incomplete" :
                "challenge-item") + (
                  !searchResults.includes(challenge) ? " challenge-hide" : ""
                )
              }
              onClick = {this.handleClick(challenge.id)}>
            <div className = "challenge-title">
              <p>
                {challenge.title}
              </p>
            </div>
            <div className = "challenge-description">
              {challenge.description}
            </div>
            <div className = "challenge-tags">
              <div className = "challenge-language">
                {challenge.language_name}
              </div>
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

