import React from "react";

const ContactChat = ({ username, lastChat }) => {
  return (
    <article className="flex justify-evenly my-2">
      <div className="h-[50px] w-[50px] bg-white rounded-full cursor-pointer duration-200 hover:opacity-90"></div>
      <div className="bg-blue-100 w-5/6 h-[50px] p-1 flex flex-col rounded-lg cursor-pointer duration-200 hover:opacity-80">
        <span className="text-gray-600 font-semibold">{username}</span>
        <p className="text-sm">{lastChat}</p>
      </div>
    </article>
  );
};

export default ContactChat;
