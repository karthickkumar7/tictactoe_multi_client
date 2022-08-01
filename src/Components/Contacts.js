import React from "react";
import { BiSearch } from "react-icons/bi";
import { MdAdd } from "react-icons/md";

import ContactChat from "./ContactChat";

const Contacts = () => {
  return (
    <section className="h-full w-2/6 p-2 bg-blue-500">
      <div className="h-[50px] w-full flex p-2 bg-blue-600 rounded-lg">
        <input
          type="text"
          placeholder="search contacts"
          className="w-full px-2 py-1 bg-blue-600 text-white outline-none placeholder:text-blue-100"
        />
        <BiSearch className="h-[40px] w-[40px] text-white cursor-pointer duration-300 hover:text-blue-200" />
      </div>
      <div className="w-full h-[590px]">
        <ContactChat {...{ username: "cock sucker69", lastChat: "juicy!" }} />
        <ContactChat
          {...{
            username: "Captain Save a Hoe",
            lastChat: "Hey man leave her alone!",
          }}
        />
        <ContactChat
          {...{
            username: "Sir Simp a lot",
            lastChat: "Ohh! myyy!",
          }}
        />
      </div>
      <div className="w-full h-[40px]">
        <button className="w-full h-full flex justify-center items-center text-white text-lg font-semibold border border-white rounded-lg bg-blue-400 duration-300 hover:bg-blue-500">
          Create Group
          <MdAdd className="mx-2 h-[25px] w-[25px]" />
        </button>
      </div>
    </section>
  );
};

export default Contacts;
