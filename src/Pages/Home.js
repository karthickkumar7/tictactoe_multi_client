import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Contacts from "../Components/Contacts";
import Conversations from "../Components/Conversations";

const Home = () => {
  const { isLoggedIn } = useSelector((s) => s.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/auth");
      return () => {};
    }
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-200">
      <main className="h-[700px] w-[1200px] flex bg-white rounded-xl overflow-hidden">
        <Contacts />
        <Conversations />
      </main>
    </div>
  );
};

export default Home;
