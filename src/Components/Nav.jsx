import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { MdPersonSearch, MdOutlineSettingsAccessibility } from "react-icons/md";
import { BiMessageSquareAdd } from "react-icons/bi";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <nav className="w-full h-[60px] px-2 flex justify-between items-center border-b bg-gray-50 cursor-pointer relative">
      <span className="text-2xl text-gray-500 font-bold italic hover:animate-bounce">
        Chat
        <span className="text-amber-500">(.)(.)</span>
      </span>
      <div>
        {showMenu ? (
          <GiHamburgerMenu
            className="h-[30px] w-[30px] duration-300 hover:text-gray-600"
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <>
            <AiOutlineClose
              className="h-[25px] w-[25px] mr-2 duration-300 hover:text-gray-600"
              onClick={() => setShowMenu(true)}
            />
            <div className="h-[300px] w-[300px] p-2 bg-blue-200 rounded-lg absolute top-12 right-2">
              <ul>
                <li className="mb-2">
                  <button className="w-full bg-blue-600 px-2 py-1 flex items-center justify-center text-white font-bold rounded-lg duration-300 hover:opacity-80">
                    <BiMessageSquareAdd className="h-[20px] w-[20px] mx-2" />
                    Add new Conatct
                  </button>
                </li>
                <li className="mb-2">
                  <button className="w-full bg-blue-600 px-2 py-1 flex items-center justify-center text-white font-bold rounded-lg duration-300 hover:opacity-80">
                    <MdPersonSearch className="h-[20px] w-[20px] mx-2" />
                    See all Conatcts
                  </button>
                </li>
                <li>
                  <button className="w-full bg-blue-600 px-2 py-1 flex items-center justify-center text-white font-bold rounded-lg duration-300 hover:opacity-80">
                    <MdOutlineSettingsAccessibility className="h-[20px] w-[20px] mx-2" />
                    Change Theme
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
