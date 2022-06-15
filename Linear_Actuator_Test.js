var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var Linear_Actuator = new Gpio(26, 'out'); //use GPIO pin 4, and specify that it is output
// If nothing happens, change 4 to 7.


// The linear actuator should turn on and extend fully
// To bring back down, swap the GND and VCC cables of the linear actuator to the relay.
function Actuator_Test() {
    Linear_Actuator.writeSync(1);
    console.log("Linear actuator activated");
}

async function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

async function Linear_Actuator_Time_Test(t) {
    Linear_Actuator.writeSync(1);
    await sleep(t)
    Linear_Actuator.writeSync(0)
  }
  
Linear_Actuator_Time_Test(2000);