//import move_time from "./Densities.js";

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

const recipes = {"VSC": {"Steps": [1, 2, 3, 4], "instructions": ["150g plain flour", "50g white sugar", "120g icing sugar", "10g baking soda"]},
                 "CC": {"Steps": 4, "step1": "150g"}};

//JS Buttons
const next_button = document.getElementById("NextR_button");
const ready_button = document.getElementById("Ready_button");
const popup = document.getElementById("popup");
const steps_count = document.getElementById("Steps1");
const description = document.getElementById("Step_description");

// Recipe data
var total_steps = recipes.VSC.Steps.length;
var i = 0;
var current_step = recipes.VSC.Steps;


// Decription data
var instruction = recipes.VSC.instructions;
var s = 0;

for (let s in instruction) {
    console.log(s + ' is ' + instruction[s])
};

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

  
next_button.onclick = function () {
    //Linear acutuator = move down
    console.log(total_steps);
    
    popup.style.visibility = "visible";

};


ready_button.onclick = function () {
    //console.log("Linear Actuator moved down");
    popup.style.visibility = "hidden";
    i += 1;
    //console.log(current_step[i]);
    var steps_message = "Step ".concat(current_step[i], " of ", total_steps);
    steps_count.innerHTML = steps_message;
    description.innerHTML = instruction[s];
    s += 1;
};




