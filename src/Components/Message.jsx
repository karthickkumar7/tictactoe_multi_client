import React from "react";
// import { useSelector } from "react-redux";

const Message = ({ message, senderId }) => {
  return (
    <div
      className={`${
        senderId ? "self-end bg-blue-600 text-white" : "bg-gray-100"
      } min-w-[100px] max-w-[400px] max-h-full min-h-10 my-2 p-2 rounded-lg`}
    >
      <span>{message}</span>
    </div>
  );
};

export default Message;
