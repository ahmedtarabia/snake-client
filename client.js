const net = require("net");
const  {IP, PORT} = require("./constants");



const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected with game server.");
  });


  conn.on("data", (data) => {
    console.log(`Data received from the server: ${data}`);
  });

  conn.on("close", () => {
    console.log(`Server shutdown!`);
  });

  conn.write("Name: ANT");
  conn.write("Say: How are you?");
  // conn.write("Move: up");
  // conn.write("Move: down");
  // setTimeout(() => {conn.write("Move: up")}, 500);
  // setTimeout(() => {conn.write("Move: up")}, 1000);
  // setTimeout(() => {conn.write("Move: up")}, 1500);
  // setTimeout(() => {conn.write("Move: up")}, 2000);
  // setTimeout(() => {conn.write("Move: right")}, 2500);
  // setTimeout(() => {conn.write("Move: down")}, 3000);
  // setInterval(() => {conn.write("Move: up")}, 500);
  // conn.write("Move: right")

  return conn;
};



module.exports = connect;