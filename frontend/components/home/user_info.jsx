import React from 'react';
import {generateIcon} from '../../utils/user_icon_util';

export default ({ username, messages, style, onClick, onClickIcon = () => {}}) => (
  <div className = "home-user" style = {style}>
    <div className = "completed-left-side" onClick = {onClick}>
      <div className = "user-messages">
        {messages.map(message => <h1 key = {message}> {message} </h1>)}
      </div>
    </div>
    {generateIcon(username, 50, "", onClickIcon)}
  </div>
);