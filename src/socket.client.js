import { io } from "socket.io-client";

let socket;
const connectSocket = () => {
    socket = io("http://localhost:5000");
};

export { socket, connectSocket };
