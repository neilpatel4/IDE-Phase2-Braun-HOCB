// import `onoff` package
const { Gpio } = require( 'onoff' );

// configure LED pins
const LAR = new Gpio( 4, 'out' ); // Red 
const LAE = new Gpio( 14, 'out' );
const pin_blue = new Gpio( 13, 'out' );

async function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// toggle LED states
exports.toggle = ( r, g) => {
  LAE.writeSync( r ? 1 : 0 );
  LAR.writeSync( g ? 1 : 0 );
  // pin_blue.writeSync( b ? 1 :0 );
};

exports.extension_control = async function (t) {
  LAE.writeSync(1);
  await sleep(t);
  LAE.writeSync(0);
};