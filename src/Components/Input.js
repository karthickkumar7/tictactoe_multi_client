import React from "react";

const Input = () => {
  return (
    <div className="w-full h-[90px] bg-blue-400 flex justify-center items-center">
      <input
        type="text"
        placeholder="Type message..."
        className="w-4/6 h-1/2 px-2 py-1 outline-none bg-blue-200 rounded"
      />
      <button className="px-2 py-1 bg-blue-600 text-white rounded mx-2 h-1/2 w-[100px] font-bold">
        Send
      </button>
    </div>
  );
};

export default Input;
