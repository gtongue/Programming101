import React from 'react';
import { formatOutput } from '../../utils/terminal/terminal_util';
class Terminal extends React.Component{
  constructor(props){
    super(props);
    // this.state = {output: props.output};
    this.log = this.log.bind(this);
  }

  log(string){
    console.log("string: " + string);
    this.setState( {output: this.state.output + `\n ${string}`});
  }

  render()
  {
    let { output } = this.props;
    output = formatOutput(output);
    return (
      <div className = "terminal">
        { output.map(line => <div key = {Math.random()*10000}>{line}</div>) }
      </div>
    );
  }
}

export default Terminal;