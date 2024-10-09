import React, { useState } from "react";
import ChatBubble from "../components/ChatBubble";
import Sidebar from "../components/Sidebar";

export default function Homepage() {
  const [messages, setMessages] = useState([
    {
      sender: "Kate Johnson",
      text: "Recently I saw properties in great locations!",
      isSender: false,
    },
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
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col h-screen">
        <div className="navbar bg-base-100">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1">
            <a className="font-oswald font-extrabold normal-case text-xl">
              BELAKANGAN
            </a>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-4 bg-base-200">
          {messages.map((message, index) => (
            <ChatBubble
              key={index}
              text={message.text}
              sender={message.sender}
              isSender={message.isSender}
            />
          ))}
        </div>

        <div className="bg-base-100 p-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="input input-bordered flex-grow"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />

            <button className="btn btn-square" onClick={handleSendMessage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
