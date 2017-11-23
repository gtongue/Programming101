import React from 'react';
import TestIndex from './test_index';

class Tests extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = "tests">
        <TestIndex testOutput = "Merge sort should return a sorted array"/>
        <TestIndex testOutput = "Merge sort should return a sorted array"/>
        <TestIndex testOutput = "Merge sort should return a sorted array"/>
        <TestIndex testOutput = "Merge sort should return a sorted array"/>
        <TestIndex testOutput = "Merge sort should return a sorted array"/>
        <TestIndex testOutput = "Merge sort should return a sorted array"/>
        <TestIndex testOutput = "Merge sort should return a sorted array"/>
        <TestIndex testOutput = "Merge sort should return a sorted array"/>
      </div>
    );
  }
}

export default Tests;