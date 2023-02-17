
// establishes a connection with the game server
const {connect} = require("./client")
const {setupInput} = require("./input.js");

// setup interface to handle user input from stdin



console.log("Connecting ...");
setupInput(connect());

