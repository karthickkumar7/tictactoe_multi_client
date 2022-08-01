import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../../App/features/authSlice";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn, isLoading, isSuccess, isError, success, error } =
    useSelector((s) => s.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginhandler = () => {
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
      return () => {};
    }
  }, [isLoggedIn, isSuccess, isError]);

  return (
    <section className="h-[400px] w-[500px] p-2 flex flex-col items-center bg-white rounded-xl duration-300">
      <div className=" flex justify-center">
        <img
          src="./images/login.png"
          alt="signup"
          className="h-[120px] w-[130px]"
        />
      </div>
      <article className="w-5/6 my-2 flex flex-col items-center">
        <h1 className="text-green-600 text-xl font-bold">
          Login to your Account!
        </h1>
        {isError && <p className="text-sm text-red-500 text-center">{error}</p>}
      </article>
      <section className="w-full p-2 flex flex-col items-center text-green-600">
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-5/6 px-2 py-1 mb-2 rounded-lg border border-green-600 outline-green-800"
        />
        <input
          type="text"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-5/6 px-2 py-1 mb-1 rounded-lg border border-green-600 outline-green-800"
        />
        <button
          className="w-5/6 px-2 py-1 my-1 rounded-lg bg-green-600 text-white font-bold duration-300 hover:bg-green-800"
          onClick={loginhandler}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </section>
    </section>
  );
};

export default Register;
