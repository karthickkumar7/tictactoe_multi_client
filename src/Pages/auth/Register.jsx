import React from "react";

const Register = () => {
  return (
    <section className="h-[400px] w-[500px] p-2 flex flex-col items-center bg-white rounded-xl">
      <div className=" flex justify-center">
        <img
          src="./images/register.jpg"
          alt="signup"
          className="h-[120px] w-[130px]"
        />
      </div>
      <article className="w-5/6 my-2 flex flex-col items-center">
        <h1 className="text-blue-600 text-xl font-bold">
          Create a new Account!
        </h1>
        <p className="text-sm text-blue-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam
          ipsum obcaecati exercitationem qui, aspernatur
        </p>
      </article>
      <section className="w-full p-2 flex flex-col items-center text-blue-600">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-5/6 px-2 py-1 mb-1 rounded-lg border border-blue-600 outline-blue-800"
        />
        <input
          type="text"
          placeholder="Enter your username"
          className="w-5/6 px-2 py-1 mb-1 rounded-lg border border-blue-600 outline-blue-800"
        />
        <input
          type="text"
          placeholder="Enter your password"
          className="w-5/6 px-2 py-1 mb-1 rounded-lg border border-blue-600 outline-blue-800"
        />
        <button className="w-5/6 px-2 py-1 my-1 rounded-lg bg-blue-600 text-white font-bold duration-300 hover:bg-blue-800">
          Register
        </button>
      </section>
    </section>
  );
};

export default Register;
