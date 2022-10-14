import { useState } from "react";
import { useDispatch } from "react-redux";

import { setGo, setName, setRoomName } from "../app/features/tttSlice";
import { socket } from "../socket.client";

const Login = () => {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const dispatch = useDispatch();

    const loginHandler = () => {
        dispatch(setName(username));
        dispatch(setRoomName(room));
        dispatch(setGo());

        socket.emit("go", { username, room });
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="my-4 text-3xl font-semibold text-slate-600">
                Tic Tac Toe Multiplayer
            </h1>
            <input
                type="text"
                placeholder="Room"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="my-2 outline-none p-2 border"
            />
            <input
                type="text"
                placeholder="your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="my-2 outline-none p-2 border"
            />
            <button
                className="my-4 px-2 py-1 rounded text-white bg-blue-600"
                onClick={loginHandler}
            >
                start
            </button>
        </div>
    );
};

export default Login;
