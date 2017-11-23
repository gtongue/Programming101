import React from 'react';
import { formatOutput } from '../../utils/terminal/terminal_util';
class Terminal extends React.Component{
  
  constructor(props){
    super(props);
  }
  componentDidMount(){
    if(!window.programming101env)
    {
      window.programming101env = {
      };
    }
    window.programming101env.logTerminal = this.props.receiveOutput;
  }
  componentDidUpdate(){
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
                <br/>
              </span>
          ))}
      </div>
    );
  }

}

export default Terminal;