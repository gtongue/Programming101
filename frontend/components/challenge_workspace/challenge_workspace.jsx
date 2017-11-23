import React from 'react';
import CodeMirror from 'react-codemirror';
import TerminalContainer from '../terminal/terminal_container';
import { formatCode } from '../../utils/terminal/terminal_util';

import { spawn } from 'threads';
import { runCodeAsync } from '../../utils/code/code_runner';

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
  }

  handleInput() {
    return (input) => {
      this.setState({ code: input });
    };
  }

  onRun(){
    return () => {
      this.props.clearTerminal();
      runCodeAsync(this.state.code);
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
                    onClick = {this.onRun()}
                    >
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