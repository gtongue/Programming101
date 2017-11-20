import React from 'react';
import CodeMirror from 'react-codemirror';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/monokai.css');
require('codemirror/addon/edit/matchbrackets');
require('codemirror/addon/edit/closebrackets');
require('codemirror/mode/javascript/javascript');
require('./editor.css');

class Editor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      code: ''
    };
  }

  handleInput(input) {
    return () => {
      this.setState({ code: input });
    };
  }

  render(){
    var options = {
      lineNumbers: true,
      theme: 'monokai',
      mode: "javascript",
      matchBrackets: true,
      autoCloseBrackets: true,
      // viewportMargin: Infinity
    };

    return (
      <div className= "challenge cf">
        <div className = "challenge-editor">
          <CodeMirror 
            value={this.state.code} 
            onChange={this.handleInput()} 
            options={options} />
          <div className="challenge-footer">
            <button className = "challenge-button">Save</button>
            <button className = "challenge-button">Run</button>
          </div>
        </div>
        <div className = "challenge-terminal">
          
        </div>
      </div>
    );
  }
}

export default Editor;