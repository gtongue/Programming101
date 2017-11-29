import React from 'react';
import { formatOutput } from '../../utils/terminal/terminal_util';
import { merge } from 'lodash';

class Terminal extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {output: this.props.output};
  }

  componentDidUpdate(){
    let terminalDiv = document.querySelector(".terminal");
    terminalDiv.scrollTop = terminalDiv.scrollHeight;
  }

  componentWillReceiveProps(newProps)
  {
    this.setState({
      output: newProps.output
    });
  }
  
  render()
  {
    return (
      // <div className = "terminal-container">
      //   <div className = "terminal-header">
      //     <p>
      //       Terminal
      //     </p>
      //   </div>
        <textarea className = "terminal" 
          value = {this.state.output}
        />
      // </div>
    );
  }

}

export default Terminal;