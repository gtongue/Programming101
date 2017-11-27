import React from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import TerminalContainer from '../terminal/terminal_container';
import TestIndexContainer from '../tests/test_index_container';
import StepsContainer from '../challenge_workspace/steps_container';

import { formatCode } from '../../utils/terminal/terminal_util';
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
      code: '',
      output: '',

        testing: `Testing.isEqual(mergeSort([1,2,3,4,5]), [1,2,4,5], "Doesn't edit original array.");
        Testing.isEqual(mergeSort([]), [], "Works with empty array");
        Testing.isEqual(mergeSort([4,2,3,2,5]), [2,2,3,4,5], "Sorts array.");`,
    };
  }

  componentDidMount(){
    console.log(this.props);
    if(this.props.challenge && this.props.challenge.skeleton){
      this.setState({
        code: this.props.challenge.skeleton
      });
    }else{
      this.props.fetchChallenge();
    }
  }

  componentWillReceiveProps(newProps){
    this.setState({
      code: newProps.challenge.skeleton
    });
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
      this.props.clearTests();
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
        <div className = "left-side">
          <StepsContainer />
        </div>
        <div className = "editor">
          <CodeMirror 
            value={this.state.code} 
            onBeforeChange={(editor, data, value) => {
              this.setState({code: value});
            }}
            onChange={(editor, data, value) => {
            }}
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
          <TestIndexContainer />
        </div>
      </div>
    );
  }
}

export default ChallengeWorkspace;