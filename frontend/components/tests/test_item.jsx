import React from 'react';

export default ({ testOutput, success }) => (
  <div className = "test-index">
    {(success === 'true')? 
      <div className = "success">
        {testOutput}
        <i className ="fa fa-check-circle-o fa-lg" aria-hidden="true"></i>
      </div>
      :
      <div className = "fail">
        {testOutput}
        <i className ="fa fa-times-circle-o fa-lg fail" aria-hidden="true"></i>
      </div>
      } 
  </div>
);