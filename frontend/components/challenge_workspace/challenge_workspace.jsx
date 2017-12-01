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
require('./codemirror.css');

import { formatOutput } from '../../utils/terminal/terminal_util';

class ChallengeWorkspace extends React.Component {
  constructor(props){    
    super(props);
    this.state = {
      code: '',
      output: '',
      tests: '',
      steps: '',
      success: [],
      completed: false
    };
    this.saveFile = this.saveFile.bind(this);
  }

  componentDidMount(){
    if(this.props.challenge && this.props.challenge.skeleton){
      this.setState({
        code: this.props.challenge.skeleton,
        tests: this.props.challenge.tests,
        steps: this.props.challenge.steps
      });
    }else{
      this.props.fetchChallenge();
    }
  }
  
  componentWillUnmount(){
    this.props.clearErrors();
    this.props.clearTests();
    this.props.clearTerminal();
  }

  componentWillReceiveProps(newProps){
    if(!this.state.tests && newProps.challenge){
      this.setState({
        code: newProps.challenge.skeleton,
        tests: newProps.challenge.tests,
        steps: newProps.challenge.steps
      });
    }
    if(this.state.tests){
      if(newProps.tests.success.length === (this.state.tests.match(/;/g) || []).length){
        this.props.completeChallenge(
            this.props.challenge.id,
            this.props.userId, 
            (this.state.code.match(/\n/g) || []).length + 1);
        this.setState({completed: true});
      }
    }
  }

  saveFile(){
    this.props.saveFile({
      user_id: this.props.userId,
      challenge_id: this.props.challenge.id,
      content: this.state.code
    });
  }

  handleInput() {
    return (input) => {
      this.setState({ code: input });
    };
  }

  onRun(){
    return () => {
      this.saveFile();
      this.props.clearTerminal();
      this.props.clearErrors();
      runCodeAsync(this.state.code);
      if(this.state.success.length === 0){
        setTimeout(() => $('.challenge-success').css("animation-name", "slideOutRight"), 2000);
        setTimeout(() => this.setState({success: []}), 3000);
      }
      this.setState({success: ["Running Code..."]});      
    };
  }
  
  onTest(){
    return () => {
      this.saveFile();      
      this.props.clearTerminal();
      this.props.clearErrors();
      this.props.clearTests();
      if(this.state.success.length === 0){        
        setTimeout(() => $('.challenge-success').css("animation-name", "slideOutRight"), 2000);
        setTimeout(() => this.setState({success: []}), 3000);
      }
      this.setState({success: ["Running Tests..."]});
      testCodeAsync(this.state.code, this.state.tests);
    };
  }

  render(){
    let options = {
      lineNumbers: true,
      theme: 'monokai',
      mode: "javascript",
      matchBrackets: true,
      autoCloseBrackets: true,
      tabSize: 4
    };
    return (
      <div className= "challenge cf">
        {
          this.state.completed ? (
            <div className = "completion-modal-container">
              <div className = "completion-modal">
                <h1> Congratualations! You Completed { /*this.props.challenge.title*/ }</h1>
              </div>
            </div>
          ) : ""
        }
        <div className = "left-side">
          <StepsContainer steps = {this.state.steps}/>
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
            {/* <button className = "editor-button">
                    Save
            </button> */}
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
        {
          this.props.errors.length > 0 ? 
            <ul className = "challenge-errors">
              {this.props.errors.map(error => (
                <li key = {error}>
                  {error}
                </li>
              ))}
            </ul>

        :""}
        {this.state.success.length > 0 ? 
          <ul className = "challenge-success">
            {this.state.success.map(error => (
              <li key = {error}>
                {error}
              </li>
            ))}
          </ul>
        :""}
      </div>
    );
  }
}

export default ChallengeWorkspace;