import React from "react";

const ChatBubble = ({ text, sender, isSender }) => (
  <div className={`chat ${isSender ? "chat-end" : "chat-start"}`}>
    <div className="chat-header">{sender}</div>
    <div className={`chat-bubble ${isSender ? "chat-bubble-primary" : ""}`}>
      {text}
    </div>
  </div>
);

export default ChatBubble;
