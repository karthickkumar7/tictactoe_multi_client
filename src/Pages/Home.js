import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateSid } from "../App/features/authSlice";
import socket from "../socket.io";

import Contact from "../Components/Contact";
import TopNav from "../Components/TopNav";
import Board from "../Components/Board";
import Input from "../Components/Input";

const Home = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((s) => s.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return () => {};
    }

    socket().on("me", (id) => dispatch(updateSid(id)));
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-200">
      <div className="w-[1200px] h-[900px] bg-white rounded overflow-hidden flex">
        <Contact />
        <section className="h-full w-8/12 bg-white">
          <TopNav />
          <Board />
          <Input />
        </section>
      </div>
    </div>
  );
};

export default Home;
