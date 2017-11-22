import React from 'react';
import { formatOutput } from '../../utils/terminal/terminal_util';
class Terminal extends React.Component{
  
  constructor(props){
    super(props);
  }

  componentDidUpdate(){
    console.log("here");
    let objDiv = document.querySelector(".terminal");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render()
  {
    let { output } = this.props;
    output = formatOutput(output);
    return (
      <div className = "terminal">
          {output.map((line, idx) => (
              <span key = {idx}>
                {line}
                <br></br>
              </span>
          ))}
      </div>
    );
  }

}

export default Terminal;