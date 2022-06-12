import Recipes from "../Densities.js";

var socket = io();

// Recipe step by step array
//var recipe_step = {"VSC": [1, 2, 3, 4],
//                  "CC": [1, 2, 3, 4],
//                   "WCC": [1, 2, 3, 4]};

//var recipe_step = {"VSC": [1, 2, 3, 4], "Step1": "makle stuff", "step2": };

/*
const recipes = {"VSC": {"Steps": [1, 2, 3, 4], "step1": "150g plain flour", "step2": "50g white sugar",
                "step3": "120g icing sugar", "step4": "10g baking soda"},
                 "CC": {"Steps": 4, "step1": "150g"}};

*/

const recipes = {
  "VSC": { "Steps": [1, 2, 3, 4], "instructions": ["150g plain flour", "50g white sugar", "120g icing sugar", "10g baking soda"] },
  "CC": { "Steps": 4, "step1": "150g" }
};

//JS Buttons
const next_button = document.getElementById("NextR_button");
const back_button = document.getElementById("PreviousR_button");
const ready_button = document.getElementById("Ready_button");
const start_button = document.getElementById("start_button");
const popup_desc = document.getElementById("popup_desc");
const done_button = document.getElementById("Done_button");
const home_button = document.getElementById("home_Button");
const popup = document.getElementById("popup");
const steps_count = document.getElementById("Steps1");
const description = document.getElementById("Step_description");
const quad1 = document.getElementById("q1");
const quad2 = document.getElementById("q2");
const quad3 = document.getElementById("q3");
const quad4 = document.getElementById("q4");

const quads = [quad1, quad4, quad3, quad2];

// Recipe data
var total_steps = recipes.VSC.Steps.length;
var i = 0;
var current_step = recipes.VSC.Steps;


// Decription data
var instruction = recipes.VSC.instructions;

/*
let i = 0;
do {
  i += 1;
  var current_step = i;
} while (i < total_steps);
*/

/*
for (let step = 0; step < 4; step++) {
    // Runs 5 times, with values of step 0 through 4.
    var current_step = step+1;
    console.log('Walking east one step');
  };
  */


home_button.onclick = function () {
  window.location.replace("index.html");
  console.log("Home button pressed. Move linear actuator down.");
};


next_button.onclick = function () {
  //Linear acutuator = move down
  console.log("Linear Actuator move to down position");
  popup.style.visibility = "visible";
  check_back_button(i);


};


done_button.onclick = function () {
  window.location.replace("index.html");
  console.log("Finished. Move linear actuator down.");
};


start_button.onclick = function() {
  popup.style.visibility = "hidden";
  start_button.style.visibility = "hidden";
  popup_desc.style.visibility = "hidden";
  
};

ready_button.onclick = function () {
  console.log("Move to next ingredient height");
  popup.style.visibility = "hidden";
  i += 1;
  console.log(current_step[i]);
  var steps_message = "Step ".concat(current_step[i], " of ", total_steps);
  steps_count.innerHTML = steps_message;
  description.innerHTML = instruction[i];
  quads[i].style.backgroundColor = "#00CC2C";
  check_back_button(i);
  if (current_step[i] == total_steps) {
    done_button.style.visibility = "visible";
    next_button.style.visibility = "hidden";
  }


  var move_time = Recipes.step_time(Recipes.Vanilla_Sponge_Cake, i);
  console.log(move_time);
};


back_button.onclick = function () {
  done_button.style.visibility = "hidden";
  next_button.style.visibility = "visible";
  console.log("Move to previous ingredient height");
  i = i - 1;
  console.log(current_step[i]);
  check_back_button(i);
  popup.style.visibility = "hidden";

  var steps_message = "Step ".concat(current_step[i], " of ", total_steps);
  steps_count.innerHTML = steps_message;
  description.innerHTML = instruction[i];
  quads[i + 1].style.backgroundColor = "#FFFFFF";
};


function check_back_button(i) {
  if (current_step[i] >= 2) {
    back_button.style.visibility = "visible";
  } else {
    back_button.style.visibility = "hidden";
  }
};

