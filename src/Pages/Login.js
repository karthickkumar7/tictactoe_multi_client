import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import socket from "../socket.io";
import { login, updateSid } from "../App/features/authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, isSuccess, isError, error, success, isLoggedIn } =
    useSelector((s) => s.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    socket().on("me", (id) => dispatch(updateSid(id)));
    if (isSuccess) {
      navigate("/");
      return () => {};
    }
  }, [isSuccess, isError, isLoggedIn]);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-200">
      <div className="h-[300px] w-[600px] border-4 border-black rounded flex flex-col items-center justify-evenly bg-white">
        {error ? (
          <h1 className="text-xl font-bold text-red-800">{error}</h1>
        ) : (
          <h1 className="text-xl font-bold text-gray-800">Login</h1>
        )}
        <div className="flex flex-col justify-center items-center p-2 w-5/6 rounded">
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="my-2 px-2 py-1 border border-black rounded outline-none w-full"
          />
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="my-2 px-2 py-1 border border-black rounded outline-none w-full"
          />
          {isLoading ? (
            <h1 className="text-2xl font-bold text-gray-700">Loading...</h1>
          ) : (
            <button
              className="my-2 px-2 py-1 border rounded w-full hover:bg-slate-200"
              onClick={loginHandler}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
