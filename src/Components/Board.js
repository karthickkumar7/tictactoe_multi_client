import React from "react";
import { useSelector } from "react-redux";

const Board = () => {
  const { currentChat } = useSelector((s) => s.chat);
  const { user } = useSelector((s) => s.auth);

  return (
    <div className="w-full h-[750px] bg-slate-100 p-2">
      {/* {user.chats[currentChat].map((msg) => (
        <div
          className={`${
            msg.sender === user._id
              ? "bg-blue-300 flex justify-end"
              : "bg-slate-200"
          } p-2 m-2 text-lg font-semibold rounded`}
        >
          <span>{msg.message}</span>
        </div>
      ))} */}
    </div>
  );
};

export default Board;
