import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  

  return (
    
        <div className="messageContainer ">
          <div className="sentText ">{trimmedName}</div>
          <div className="messageBox ">{ReactEmoji.emojify(text)} </div>
        </div>
  );
}

export default Message;