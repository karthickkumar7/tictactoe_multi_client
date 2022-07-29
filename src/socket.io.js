import { io } from "socket.io-client";

const socket = () => io("http://localhost:5000");

export let ID = "";

socket().on("connect", () => {
  ID = socket.id;
});

export default socket;
