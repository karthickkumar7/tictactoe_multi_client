import React from "react";

const InputMessage = () => {
  return (
    <div className="w-full h-[50px] p-1 flex items-center justify-evenly bg-white">
      <input
        type="text"
        placeholder="text..."
        className="h-[40px] w-5/6 px-2 rounded-lg bg-slate-100 outline-none"
      />
      <button className="h-[40px] w-[100px] px-2 py-1 bg-blue-600 text-white font-bold rounded">
        send
      </button>
    </div>
  );
};

export default InputMessage;
