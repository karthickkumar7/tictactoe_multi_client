import React from "react";
import ConversationChat from "./ConversationChat";
import InputMessage from "./InputMessage";

import Nav from "./Nav";

const Conversations = () => {
  return (
    <section className="h-full w-4/6 bg-blue-100">
      <Nav />
      <ConversationChat />
      <InputMessage />
    </section>
  );
};

export default Conversations;
