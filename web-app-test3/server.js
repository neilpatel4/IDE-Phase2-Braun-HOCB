const path = require( 'path' );
const express = require( 'express' );
const socketIO = require( 'socket.io' );

// import LED control API
const { actuator, actuator_down } = require('./Densities' );

// create an express app
const app = express();

// send `index.html` from the current directory
// when `http://<ip>:9000/` route is accessed using `GET` method

app.get( '/', ( request, response ) => {
  response.sendFile( path.resolve( __dirname, 'Static/Step1.html' ), {
    headers: {
      'Content-Type': 'text/html',
    }
  } );
} );

// send asset files
app.use( '/assets/', express.static( path.resolve( __dirname, 'web-app-test/Static' ) ) );
app.use( '/assets/', express.static( path.resolve( __dirname, 'node_modules/socket.io-client/dist' ) ) );

// server listens on `9000` port
const server = app.listen( 9000, () => console.log( 'Express server started!' ) );

// create a WebSocket server
const io = socketIO( server );

// listen for connection
io.on( 'connection', ( client ) => {
  console.log( 'SOCKET: ', 'A client connected', client.id );

  // listen to `step-1` event
  client.on( 'step-1', ( data ) => {
    console.log( 'Received linear actuator extend event 1.' );
    actuator(Vanilla_Sponge_Cake, 1); // step one
  } );

    // listen to `step-1` event
  client.on( 'step-2', ( data ) => {
    console.log( 'Received linear actuator extend event 2.' );
    actuator(Vanilla_Sponge_Cake, 2); // step one
  } );

    // listen to `step-1` event
  client.on( 'step-3', ( data ) => {
    console.log( 'Received linear actuator extend event 3.' );
    actuator(Vanilla_Sponge_Cake, 3); // step one
  } );

    // listen to `step-1` event
  client.on( 'step-4', ( data ) => {
    console.log( 'Received linear actuator extend event 4.' );
    actuator(Vanilla_Sponge_Cake, 4); // step one
  } );

  client.on( 'next', ( data ) => {
    console.log( 'Received linear actuator retract event.' );
    actuator_down(); // bring actuator down
  } );

} );