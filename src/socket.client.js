import { io } from 'socket.io-client';

let socket;
const connectSocket = () => {
    socket = io('https://tttmulti.herokuapp.com/');
};

export { socket, connectSocket };
