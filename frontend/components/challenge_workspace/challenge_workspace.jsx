import React from 'react';
import CodeMirror from 'react-codemirror';
import TerminalContainer from '../terminal/terminal_container';
import TestsContainer from '../tests/tests_container';
import { formatCode } from '../../utils/terminal/terminal_util';
import TestingLibrary from '../../utils/code/code_tester';
import { spawn } from 'threads';
import { runCodeAsync, testCodeAsync } from '../../utils/code/code_runner';

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
      testing: `Testing.isEqual(mergeSort([1,2,3,4,5]), [1,2,4,5], "Doesn't edit original array.");
      Testing.isEqual(mergeSort([]), [], "Works with empty array");
      Testing.isEqual(mergeSort([4,2,3,2,5]), [2,2,3,4,5], "Sorts array.");`,
      return_value: 'undefined'
    };
  }

  componentDidMount(){
    if(!window.propgramming101env)
    {
      window.propgramming101env = {};
    }
    window.programming101env.tester = TestingLibrary;
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
  
  onTest(){
    return () => {
      this.props.clearTerminal();
      testCodeAsync(this.state.code, this.state.testing);
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
                    onClick = {this.onTest()}
                    >
                    Test
            </button>
            <button className = "editor-button"
                    onClick = {this.onRun()}
                    >
                    Run
            </button>
          </div>
        </div>
        <div className = "right-side">
          <TerminalContainer />
          <TestsContainer />
        </div>
      </div>
    );
  }
}

export default ChallengeWorkspace;