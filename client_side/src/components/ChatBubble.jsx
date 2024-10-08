import React from "react";

export default function ChatBubble({ text, sender, isSender }) {
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`rounded-lg p-3 ${
          isSender ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        } max-w-xs`}
      >
        <div className="text-sm">{sender}</div>
        <div>{text}</div>
      </div>
    </div>
  );
}
