const net = require("net");
const readline = require("readline");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.on("connect", () => {
    console.log("")
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connection made successfully");

    conn.write("Name: MLB");

    //conn.write("Move: up");

    });

  return conn;
};

module.exports = {connect};