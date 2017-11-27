import React from 'react';
import Markdown from 'markdown-it';

class Steps extends React.Component {
  constructor(props){
    super(props);
    this.markdown = Markdown();
  }

  render(){
    return (
      <div className = "steps"  
      dangerouslySetInnerHTML = {
        {__html: this.markdown.render(this.props.steps)}
      }
      >
      </div>
    );
  }
}

export default Steps;