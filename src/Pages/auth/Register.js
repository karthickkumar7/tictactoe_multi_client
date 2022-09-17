import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { register } from "../../app/thunk/authThunk";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [image, setImage] = useState("");
    const [loadImage, setLoadImage] = useState("");

    const dispatch = useDispatch();

    // styles
    const inputDivs = "w-full mb-4 flex flex-col items-center";
    const inputs =
        "w-full h-[40px] mt-2 px-2 py-1 outline-none rounded bg-black";
    const inputLabels = "self-start";

    const fileHandler = (e) => {
        if (e.target.files.length) {
            [e.target.name] = e.target.value;
            const reader = new FileReader();
            reader.onload = () => setLoadImage(reader.result);
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const registerHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("image", image);

        dispatch(register(formData));

        // setConfirm("");
        // setPassord("");
        // setEmail("");
        // setUsername("");
        // setImage("");
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-slate-500 to-slate-900">
            <div className="w-[600px] h-[700px] py-[10px] px-[16px] flex justify-center shadow-sm rounded bg-slate-800 text-white">
                <form
                    className="w-[90%] h-full flex flex-col items-center justify-center"
                    onSubmit={registerHandler}
                >
                    <div className={inputDivs}>
                        <h1 className="text-3xl font-semibold">Register</h1>
                    </div>
                    <div className={inputDivs}>
                        <label htmlFor="name" className={inputLabels}>
                            Username
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="min 4 letters long"
                            className={inputs}
                        />
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
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="min 5 letters long"
                            className={inputs}
                        />
                    </div>
                    <div className={inputDivs}>
                        <label htmlFor="confirm" className={inputLabels}>
                            Confirm Password
                        </label>
                        <input
                            type="text"
                            id="confirm"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            placeholder="min 5 letters long"
                            className={inputs}
                        />
                    </div>
                    <div className="w-full mb-4 flex items-center justify-between">
                        <div>
                            {loadImage ? (
                                <img
                                    src={loadImage}
                                    alt=""
                                    className="w-[70px] h-[70px] rounded-full"
                                />
                            ) : (
                                <div className="w-[70px] h-[70px] rounded-full bg-white"></div>
                            )}
                        </div>
                        <div className="w-[420px]">
                            <label htmlFor="name" className={inputLabels}>
                                Select Image
                            </label>
                            <input
                                type="file"
                                value={image}
                                onChange={fileHandler}
                                className={inputs}
                            />
                        </div>
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
                            Already registered?{" "}
                            <Link
                                to="/login"
                                className="cursor-pointer hover:text-purple-300"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
