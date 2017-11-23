import React from 'react';

export default ({ testOutput }) => (
  <div className = "test-index">
    {testOutput}
    <i className ="fa fa-check-circle-o" aria-hidden="true"></i>
    <i className="fa fa-times-circle-o" aria-hidden="true"></i>
  </div>
);