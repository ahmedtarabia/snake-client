const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connection established with server.");
  });

  conn.on("data", (data) => {
    console.log(`Data received from the server: ${data}`);
  });

  conn.on("close", () => {
    console.log(`Server shutdown!`);
  });

  return conn;
};

module.exports = connect;