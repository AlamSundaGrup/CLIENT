export default function ChatBubble({ text, sender, profilePicture, isSender, timestamp }) {
  return (
    <div className={`chat ${isSender ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePicture} alt={sender} />
        </div>
      </div>
      <div className="chat-header">
        {sender}
        <time className="text-xs opacity-50 ml-2">
          {new Date(timestamp).toLocaleTimeString()}
        </time>
      </div>
      <div
        className={`chat-bubble ${
          isSender ? "bg-primary text-white" : "bg-base-100"
        }`}
      >
        {text}
      </div>
    </div>
  );
};
