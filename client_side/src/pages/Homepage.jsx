import React, { useState } from "react";
import ChatBubble from "../components/ChatBubble";
import Sidebar from "../components/Sidebar";

export default function Homepage() {
  const [messages, setMessages] = useState([
    // {
    //   sender: "Kate Johnson",
    //   text: "Recently I saw properties in great locations!",
    //   isSender: false,
    // },

  ]);

  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessages([
        ...messages,
        { sender: "You", text: messageInput, isSender: true },
      ]);
      setMessageInput("");
    }
  };

  return (
    <>
      <Sidebar />

      <div className="flex h-screen">
        <div className="w-3/4 flex flex-col bg-white p-4">
          <div className="flex-1 overflow-y-scroll">
            {messages.map((message, index) => (
              <ChatBubble
                key={index}
                text={message.text}
                sender={message.sender}
                isSender={message.isSender}
              />
            ))}
          </div>
          <div className="flex items-center border-t p-3">
            <input
              type="text"
              placeholder="Write your message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg p-2"
            />
            <button
              onClick={handleSendMessage}
              className="ml-4 bg-blue-500 text-white rounded-lg px-4 py-2"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
