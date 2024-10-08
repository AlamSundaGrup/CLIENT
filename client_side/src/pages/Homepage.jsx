import { useState } from "react";
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
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Chat Messages Area */}
        <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-white shadow-lg rounded-tl-3xl">
          {messages.map((message, index) => (
            <ChatBubble
              key={index}
              text={message.text}
              sender={message.sender}
              isSender={message.isSender}
            />
          ))}
        </div>

        {/* Input Area */}
        <div className="flex items-center justify-between border-t p-4 bg-white shadow-lg">
          <input
            type="text"
            placeholder="Write your message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="flex-1 bg-gray-100 border border-gray-300 rounded-full p-3 text-gray-700 focus:outline-none focus:border-blue-500 transition"
          />
          <button
            onClick={handleSendMessage}
            className="ml-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <div className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
