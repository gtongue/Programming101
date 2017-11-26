import React from 'react';

class ChallengeIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      challenges: [
        {
          title: "Merge Sort",
          tags: ["sorting", "medium"]
        },
        {
          title: "Quick Sort",
          tags: ["sorting", "medium"]
        },
        {
          title: "Merge Sort",
          tags: ["sorting", "medium"]
        },
        {
          title: "Quick Sort",
          tags: ["sorting", "medium"]
        },
        {
          title: "Merge Sort",
          tags: ["sorting", "medium"]
        },
        {
          title: "Quick Sort",
          tags: ["sorting", "medium"]
        },
        {
          title: "Merge Sort",
          tags: ["sorting", "medium"]
        },
        {
          title: "Quick Sort",
          tags: ["sorting", "medium"]
        },
        {
          title: "Merge Sort",
          tags: ["sorting", "medium"]
        },
        {
          title: "Quick Sort",
          tags: ["sorting", "medium"]
        }
      ]
    };
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