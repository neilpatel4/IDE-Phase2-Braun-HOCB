// import `onoff` package
const { Gpio } = require( 'onoff' );

// configure LED pins
const LAE = new Gpio( 4, 'out' );
const LAR = new Gpio( 14, 'out' );
const pin_blue = new Gpio( 13, 'out' );

// toggle LED states
exports.toggle = ( r, g, b ) => {
  LAE.writeSync( r ? 1 : 0 );
  LAR.writeSync( g ? 1 : 0 );
  pin_blue.writeSync( b ? 1 :0 );
};