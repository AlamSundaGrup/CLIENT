import React, { useState } from "react";
import ChatBubble from "../components/ChatBubble";
import Sidebar from "../components/Sidebar";
import backgroundImage from "../assets/background bw.jpg";

export default function Homepage() {
  const [messages, setMessages] = useState([]);
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Sidebar />
      <div
        className="flex-grow bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-[5px] z-0"></div>

        {/* Chat Container */}
        <div className="flex justify-center items-center h-full z-10 relative">
          <div
            className="relative border border-500/50  bg-black bg-opacity-20 backdrop-blur-xl rounded-lg shadow-xl p-3"
            style={{ width: "1100px", height: "500px" }}
          >
            {/* Chat  */}
            <div className="h-[380px] overflow-y-auto mb-4">
              {messages.length > 0 ? (
                messages.map((message, index) => (
                  <ChatBubble
                    key={index}
                    text={message.text}
                    sender={message.sender}
                    isSender={message.isSender}
                  />
                ))
              ) : (
                <div className="text-gray-500 text-center mt-10">
                  No messages yet
                </div>
              )}
            </div>

            {/* ChatBar */}
            <div
              className="flex justify-center items-center"
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                right: "20px",
              }}
            >
              <input
                type="text"
                placeholder="Type a message..."
                className="input input-bordered flex-grow md:w-1/2"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="btn btn-square ml-2"
                onClick={handleSendMessage}
              >
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
      </div>
    </div>
  );
}
