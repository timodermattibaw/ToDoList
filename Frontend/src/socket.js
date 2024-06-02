import io from "socket.io-client";

const socket = io("http://localhost:1111");

export default socket;
