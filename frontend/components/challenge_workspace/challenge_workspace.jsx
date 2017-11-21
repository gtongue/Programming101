import React from 'react';
import CodeMirror from 'react-codemirror';
// import Terminal from '../terminal/terminal';
import TerminalContainer from '../terminal/terminal_container';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/monokai.css');
require('codemirror/addon/edit/matchbrackets');
require('codemirror/addon/edit/closebrackets');
require('codemirror/mode/javascript/javascript');
require('./challenge_workspace.css');

import { formatOutput } from '../../utils/terminal/terminal_util';

class ChallengeWorkspace extends React.Component {
  constructor(props){    
    super(props);
    this.state = {
      code: `const hello = function(){
        console.log('hello');
        return 4;
      }.bind(this);
            
      const test = function(){
        console.log("test");
        return 5;
      }.bind(this);
      
      hello();
      test();`,
      output: '',
      return_value: 'undefined'
    };
    this.asyncOutput = '';
    this.log = this.log.bind(this);
  }

  handleInput() {
    return (input) => {
      this.setState({ code: input });
    };
  }

  log(string){
    this.asyncOutput += `\n=>\u0020\u0020\u0020${string}`;
  }

  returnLog(returnValue){
    this.asyncOutput += `\n${returnValue}`;
    return returnValue;
  }

  // onRun(){
  //   return () => {
  //     this.setState( {output: ''});
  //     this.asyncOutput = '';
  //     let formattedCode = formatOutput(this.state.code).join(" ");
  //     try{      
  //       let newFunction = new Function(formattedCode);
  //       newFunction.call(this);
  //       this.setState( {output: this.asyncOutput});              
  //     }catch(e){
  //       this.setState( {output: e.toString()} );
  //     }
  //   };
  // }

  onRun(){
    return () => {
      this.props.runCode(this.state.code);
    };
  }

  render(){
    var options = {
      lineNumbers: true,
      theme: 'monokai',
      mode: "javascript",
      matchBrackets: true,
      autoCloseBrackets: true,
    };
    return (
      <div className= "challenge cf">
        <div className = "editor">
          <CodeMirror 
            value={this.state.code} 
            onChange={this.handleInput()} 
            options={options} />
          <div className="editor-footer">
            <button className = "editor-button">
                    Save
            </button>
            <button className = "editor-button"
                    onClick = {this.onRun()}>
                    Run
            </button>
          </div>
        </div>
        {/* <Terminal output = {this.state.output} /> */}
        <TerminalContainer />
      </div>
    );
  }
}

export default ChallengeWorkspace;