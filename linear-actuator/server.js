const path = require( 'path' );
const express = require( 'express' );
const socketIO = require( 'socket.io' );

// import LED control API
const { toggle } = require( './led-control' );
const { actuator } = require( './led-control' );

// create an express app
const app = express();

// send `index.html` from the current directory
// when `http://<ip>:9000/` route is accessed using `GET` method
app.get( '/', ( request, response ) => {
  response.sendFile( path.resolve( __dirname, 'web-app/index.html' ), {
    headers: {
      'Content-Type': 'text/html',
    }
  } );
} );

// send asset files
app.use( '/assets/', express.static( path.resolve( __dirname, 'web-app' ) ) );
app.use( '/assets/', express.static( path.resolve( __dirname, 'node_modules/socket.io-client/dist' ) ) );

// server listens on `9000` port
const server = app.listen( 9000, () => console.log( 'Express server started!' ) );

// create a WebSocket server
const io = socketIO( server );

// listen for connection
io.on( 'connection', ( client ) => {
  console.log( 'SOCKET: ', 'A client connected', client.id );

  // listen to `led-toggle` event
  client.on( 'led-toggle', ( data ) => {
    console.log( 'Received led-toggle event.' );
    toggle( data.r, data.g, data.b ); // toggle LEDs
  } );

  // listen to `linear actuator` event
  client.on( 'linear-actuator', ( data ) => {
    console.log( 'Received linear actuator extend event.' );
    console.log(data);
    extension(2000); // activate linear actuator for 2s
  } );

} );