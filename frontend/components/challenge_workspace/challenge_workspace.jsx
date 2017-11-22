import React from 'react';
import CodeMirror from 'react-codemirror';
import TerminalContainer from '../terminal/terminal_container';
import { runCode } from '../../utils/terminal/terminal_util';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/monokai.css');
require('codemirror/addon/edit/matchbrackets');
require('codemirror/addon/edit/closebrackets');
require('codemirror/mode/javascript/javascript');
require('./challenge_workspace.css');

import { formatOutput } from '../../utils/terminal/terminal_util';
import { clearTimeout } from 'timers';

class ChallengeWorkspace extends React.Component {
  constructor(props){    
    super(props);
    this.state = {
      code: 
      `const hello = function(){
        for(let i = 0; i < 29; i++){
          console.log(i);
        }
        return 4;
      }
      
      const test = function(){
        console.log("test");
        return 5;
      }
      
      hello();
      test();`,
      output: '',
      return_value: 'undefined'
    };
    this.runCode = this.runCode.bind(this);
    this.asyncOutput = '';
    this.log = this.log.bind(this);
  }

  handleInput() {
    return (input) => {
      this.setState({ code: input });
    };
  }

  onRun(){
    return () => {
      this.props.clearTerminal();
      this.runCode(this.state.code);
    };
  }

  log(id, ...strings){
    for(let i = 0; i < strings.length; i++)
    {
      // this.props.receiveOutput(strings[i]);
      this.asyncOutput += strings[i] + "\n";
    }
    clearTimeout(id);
  }
  
  runCode (code) {
    let output = "";
    let log = console.log;
    let i = 0;
    console['log'] = (...strings) => {
      let id = setTimeout(this.log, null, id, ...strings);
    };

    let id  = setInterval(() => {
      if(this.asyncOutput === '')
      {
        clearInterval(id);
      }else{
        this.props.receiveOutput(this.asyncOutput);
        this.asyncOutput = '';
      }
    }, 10);

    let func = Function(code);
    func.call();

    console['log'] = log;
    return output;    
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
                    onClick = {() => setTimeout(this.onRun(), null)}>
                    Run
            </button>
          </div>
        </div>
        <TerminalContainer />
      </div>
    );
  }
}

export default ChallengeWorkspace;