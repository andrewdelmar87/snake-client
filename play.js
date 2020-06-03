const net = require('net');

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn;
};

console.log('Connecting ...');
connect();