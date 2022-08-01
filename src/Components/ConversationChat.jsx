import React from "react";
// import { useSelector } from "react-redux";

import Message from "./Message";

// dmm
const messages = [
  {
    _id: 0,
    message: "hey man leave her alone!",
    senderId: true,
  },
  {
    _id: 1,
    message: "let's see paul  allens card!",
    senderId: false,
  },
  {
    _id: 2,
    message: "Get back in the Kitchen!",
    senderId: true,
  },
  {
    _id: 3,
    message: "Get back in the Kitchen! bitch ass mother fucker!",
    senderId: true,
  },
];

const ConversationChat = () => {
  return (
    <main className="w-full h-[590px] p-2 flex flex-col overflow-y-scroll">
      {messages.map((msg) => (
        <React.Fragment key={msg._id}>
          <Message {...msg} />
        </React.Fragment>
      ))}
    </main>
  );
};

export default ConversationChat;
