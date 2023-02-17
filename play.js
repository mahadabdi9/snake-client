

// establishes a connection with the game server
const {connect} = require("./client")

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function () {
  stdin.on('data', () => {
    if (key === '\u0003') {
      process.exit();
    }
    process.stdout.write('.');
  });
};

/*function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connection made successfully");
  });

  return conn;
};*/

console.log("Connecting ...");
connect();

