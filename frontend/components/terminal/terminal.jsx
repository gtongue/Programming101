import React from 'react';
import { formatOutput } from '../../utils/terminal/terminal_util';
import { merge } from 'lodash';

class Terminal extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {output: this.props.output};
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
    console.timeEnd("setstate");    
    let objDiv = document.querySelector(".terminal");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  componentWillReceiveProps(newProps)
  {
    // this.setState({
    //   output: this.state.output.concat(formatOutput(newProps.output))
    // });
    this.setState({
      output: newProps.output
    });
  }
  
  render()
  {
    console.time("setstate");
    return (
      // <div className = "terminal">
      //     {this.state.output.map((line, idx) => (
      //         <span key = {Math.random()}>
      //           =>   {line}
      //           <br/>
      //         </span>
      //     ))}
      //     {/* {this.state.output.toString()} */}
      // </div>
      <textarea className = "terminal" 
        value = {this.state.output}
      />
    );
  }

}

export default Terminal;