import React from 'react';
import TestIndex from './test_index';

class Tests extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = "tests">
        {this.props.tests.success.map(test => (
          <TestIndex testOutput = {test} success = "true"/>
        ))}
        {this.props.tests.fail.map(test => (
          <TestIndex testOutput = {test} success = "false"/>
        ))}
      </div>
    );
  }
}

export default Tests;