import React from 'react';
import TestIndex from './test_index';

class Tests extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount()
  {
    if(!window.programming101env){
      window.programming101env = {};
    }
    if(!window.programming101env.testing)
    {
      window.programming101env.testing = {
        logSuccess: this.props.logSuccess,
        logFail: this.props.logFail,
        clearTests: this.props.clearTests
      };
    }else{
      window.logSuccess = this.props.logSuccess;
      window.logFail = this.props.logFail;
      window.clearTests = this.props.clearTests;
    }
  }

  render(){
    return (
      <div className = "tests">
        {this.props.tests.success.map(test => (
          <TestIndex key = {test} testOutput = {test} success = "true"/>
        ))}
        {this.props.tests.fail.map(test => (
          <TestIndex key = {test} testOutput = {test} success = "false"/>
        ))}
      </div>
    );
  }
}

export default Tests;