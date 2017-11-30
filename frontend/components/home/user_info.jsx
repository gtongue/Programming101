import React from 'react';
import {generateIcon} from '../../utils/user_icon_util';

export default ({ username, messages, style, onClick}) => (
  <div className = "home-user" style = {style} onClick = {onClick}>
      <div className = "user-messages">
        {messages.map(message => <h1> {message} </h1>)}
      </div>
      {generateIcon(username, 50, "")}
  </div>
);