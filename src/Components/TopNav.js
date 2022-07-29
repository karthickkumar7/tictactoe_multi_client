import React from "react";
import { useSelector } from "react-redux";

const TopNav = () => {
  const { currentChat } = useSelector((s) => s.chat);

  return (
    <div className="w-full h-[60px] bg-blue-400 flex items-center">
      <h1 className="text-white font-bold text-xl mx-2">{currentChat}</h1>
    </div>
  );
};

export default TopNav;
