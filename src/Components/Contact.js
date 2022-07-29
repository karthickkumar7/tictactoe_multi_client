import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCurrentChat } from "../App/features/chatSlice";

const Contact = () => {
  const { user } = useSelector((s) => s.auth);
  const dispatch = useDispatch();

  const setCurrentChatHandler = (chatname) => {
    dispatch(setCurrentChat(chatname));
  };

  return (
    <section className="h-full w-4/12 bg-blue-600 flex justify-center">
      <div className="h-full w-2/3 my-2 flex flex-col text-white">
        <h1 className="text-2xl font-bold my-2 py-1 text-blue-200 border-b border-blue-200">
          Chats
        </h1>
        {user?.contacts.map((con) => (
          <span
            key={con}
            className="text-xl font-semibold cursor-pointer"
            onClick={() => setCurrentChatHandler(con)}
          >
            {con}
          </span>
        ))}
      </div>
    </section>
  );
};

export default memo(Contact);
