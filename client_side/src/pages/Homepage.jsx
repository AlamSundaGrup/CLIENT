import React, { useState } from "react";

// ChatBubble component
const ChatBubble = ({ text, sender, isSender }) => (
  <div className={`chat ${isSender ? "chat-end" : "chat-start"}`}>
    <div className="chat-header">{sender}</div>
    <div className={`chat-bubble ${isSender ? "chat-bubble-primary" : ""}`}>
      {text}
    </div>
  </div>
);

// Sidebar component with profile hover effect
const Sidebar = () => {
  return (
    <div className="sidebar-container h-screen">
      <ul className="menu p-1 w-full md:w-20 h-full bg-base-200 text-base-content flex flex-col justify-between">
        <div className="flex-grow"></div>

        <div className="relative group">
          <button className="btn btn-ghost mb-4">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Profile"
              className="w-10 h-10 rounded-full mr-3"
            />
          </button>

          <div className="absolute bottom-14 left-0 bg-base-100 text-base-content rounded-lg p-4 shadow-lg hidden group-hover:block w-48">
            <div className="flex items-center"></div>
            <div className="mt-2">
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn btn-sm btn-primary w-full"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Profile
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-full">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click on ✕ button to close
                  </p>
                </div>
              </dialog>
              <button className="btn btn-sm btn-secondary w-full mt-1">
                Logout
              </button>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};


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
