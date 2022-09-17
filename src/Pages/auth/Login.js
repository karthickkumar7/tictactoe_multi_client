import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassord] = useState("");
    //styles
    const inputDivs = "w-full mb-4 flex flex-col items-center";
    const inputs =
        "w-full h-[40px] mt-2 px-2 py-1 outline-none rounded bg-black";
    const inputLabels = "self-start";

    const loginHandler = (e) => {
        e.preventDefault();

        console.log(email, password);
        setPassord("");
        setEmail("");
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-slate-500 to-slate-900">
            <div className="w-[600px] h-[400px] py-[10px] px-[16px] flex justify-center shadow-sm rounded bg-slate-800 text-white">
                <form
                    className="w-[90%] h-full flex flex-col items-center justify-center"
                    onSubmit={loginHandler}
                >
                    <div className={inputDivs}>
                        <h1 className="text-3xl font-semibold">Login</h1>
                    </div>
                    <div className={inputDivs}>
                        <label htmlFor="email" className={inputLabels}>
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="exam@email.com"
                            className={inputs}
                        />
                    </div>
                    <div className={inputDivs}>
                        <label htmlFor="password" className={inputLabels}>
                            Password
                        </label>
                        <input
                            type="text"
                            id="password"
                            value={password}
                            onChange={(e) => setPassord(e.target.value)}
                            placeholder="min 5 letters long"
                            className={inputs}
                        />
                    </div>
                    <div className={inputDivs}>
                        <input
                            type="submit"
                            title="Register"
                            placeholder=""
                            className={`${inputs} cursor-pointer bg-slate-600 hover:bg-slate-700`}
                        />
                    </div>
                    <div className={inputDivs}>
                        <p>
                            Not registered?{" "}
                            <Link
                                to="/register"
                                className="cursor-pointer hover:text-purple-300"
                            >
                                Register
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
