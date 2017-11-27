import React from 'react';
import TestItem from './test_item';

class TestIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = "tests">
        {this.props.tests.success.map(test => (
          <TestItem key = {test} testOutput = {test} success = "true"/>
        ))}
        {this.props.tests.fail.map(test => (
          <TestItem key = {test} testOutput = {test} success = "false"/>
        ))}
      </div>
    );
  }
}

export default TestIndex;