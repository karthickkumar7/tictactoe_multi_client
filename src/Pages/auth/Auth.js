import { useState } from "react";
import { HiOutlineLogin } from "react-icons/hi";

import Register from "./Register";
import Login from "./Login";

const Auth = () => {
  const [inRegister, setInRegister] = useState(true);
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="relative">
        {inRegister ? <Register /> : <Login />}
        <div
          className={`${
            inRegister ? "bg-blue-300" : "bg-green-300"
          } w-[50px] h-[80px] p-1 rounded-lg flex flex-col items-center justify-evenly absolute top-0 -right-[55px] overflow-hidden`}
        >
          <div
            className={`${
              inRegister && "bg-blue-600"
            } w-full h-1/2 flex justify-center items-center rounded-lg cursor-pointer duration-300`}
            onClick={() => setInRegister(true)}
          >
            <HiOutlineLogin
              className={`${
                inRegister ? "h-[30px] w-[30px]" : "h-[20px] w-[20px]"
              } rotate-180 rounded-lg text-white`}
            />
          </div>

          <div
            className={`${
              !inRegister && "bg-green-600"
            } w-full h-1/2 flex justify-center items-center rounded-lg cursor-pointer duration-300`}
            onClick={() => setInRegister(false)}
          >
            <HiOutlineLogin
              className={`${
                !inRegister ? "h-[30px] w-[30px]" : "h-[20px] w-[20px]"
              } rounded-lg text-white`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
