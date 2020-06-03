const {connect} = require('./client');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};
setupInput();

const handleUserInput = function() {
  setupInput().on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      connection.write('Move: up');
    } else if (key === 'a') {
      connection.write('Move: left');
    } else if (key === 's') {
      connection.write('Move: right');
    } else if (key === 'p') {
      connection.write('Move: down');
    } else if (key === 'h') {
      connection.write('Say: hello');
    };
  });
};
handleUserInput();

module.exports = {setupInput};