import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import Sidebar from "../components/Sidebar";
import ChatBubble from "../components/ChatBubble";

const socket = io("http://localhost:3000");

export default function Homepage() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  let [currentUser, setCurrentUser] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const checkUser = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(
        "http://localhost:3000/users/validateProfile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setCurrentUser(data.id);
      } else {
        setCurrentUser(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllMessages = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch("http://localhost:3000/messages", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      const formattedMessages = data.map((msg) => ({
        message: msg.message || "No message",
        sender: msg.Profile?.displayName || "User",
        profilePicture:
          msg.Profile?.profilePicture ||
          "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg",
        isSender: currentUser === msg.ProfileId,
        timestamp: msg.createdAt || new Date().toISOString(),
      }));

      setMessages(formattedMessages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    try {
      if (!message.trim()) return;
      const token = localStorage.getItem("access_token");

      socket.emit("send-message", { message, token });
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("A new user has joined the chat");
    });

    socket.on("globalMessage", () => {
      getAllMessages();
    });

    socket.on("userLeft", (msg) => {
      console.log(msg);
    });

    return () => {
      if (socket.readyState === 1) {
        socket.close();
      }
    };
  }, []);

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    getAllMessages();
  }, [currentUser]);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col h-screen">
        <div className="flex-grow overflow-y-auto p-4 bg-base-200">
          {messages.map((msg, index) => (
            <ChatBubble
              key={index}
              text={msg.message}
              sender={msg.sender}
              profilePicture={msg.profilePicture}
              isSender={msg.isSender}
              timestamp={msg.timestamp}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className="bg-base-100 p-4" onSubmit={handleSendMessage}>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="input input-bordered flex-grow"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn btn-square" type="submit">
              <i className="fi fi-sr-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
