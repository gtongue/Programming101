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
import { clearTimeout } from 'timers';

class Test {
  static test(){

  }
}

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
    this.asyncOutput = '';
    this.log = this.log.bind(this);
    this.workerTest = this.workerTest.bind(this);
  }

  componentDidMount()
  {
    if(!window.programming101env)
    {
      window.programming101env = {
        variables: {}
      };
    }
    // this.thread = spawn((input, done) => {
    //   done({integer: input.integer, code: input.code, func: input.func});
    // });
    this.thread = spawn((input, done) => {
      done({integer: input.integer, code: input.code, output: input.output});
    });
    // window.programming101env.eval = window.eval.bind(window.programming101env);
  }

  handleInput() {
    return (input) => {
      this.setState({ code: input });
    };
  }

  onRun(){
    return () => {
      this.props.clearTerminal();
      this.runCode(formatCode(this.state.code));
    };
  }

  log(id, ...strings){
    for(let i = 0; i < strings.length; i++)
    {
      console.log(typeof strings[i]);
      // this.props.receiveOutput(strings[i]);
      if(typeof strings[i] === 'object')
      {
        this.asyncOutput +=  strings[i] + " {" + "\n";
        Object.keys(strings[i]).forEach(key => (this.asyncOutput += key + "\n"));
        this.asyncOutput += "}" + "\n";
      }else{
        this.asyncOutput += strings[i] + "\n";
      }
    }
    clearTimeout(id);
  }

  workerTest(){
    window.loggingtest = this.props.receiveOutput;
    runCodeAsync(this.state.code);
  }

  //
  runCode (code) {
    window.testing = Test;
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
    new Function(code)();
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
                    // onClick = {() => setTimeout(this.onRun(), null)}
                    onClick = {this.workerTest}
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