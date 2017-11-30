import React from 'react';

export default ({ username, messages, style, onClick}) => (
  <div className = "home-user" style = {style} onClick = {onClick}>
      <div className = "user-messages">
        {messages.map(message => <h1> {message} </h1>)}
      </div>
     <img src={`http://tinygraphs.com/labs/isogrids/hexa/${username}?theme=duskfalling&numcolors=4&size=50&fmt=svg`}/>
  </div>
);