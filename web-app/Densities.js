const Recipes = Object.create(null);

var Densities = {
    "Water": 1,
    "Self-Raising Flour": 0.512,
    "Caster Sugar": 0.77,
    "Golden Caster Sugar": 0.77,
    "White Sugar": 1.59,
    "Brown Sugar": 0.721,
    "Cream Cheese": 0.98
};

//Carrot Cake Recipe ingredients§
var Carrot_Cake = {
    1: ["Vegetable Oil", 230, "ml"],
    2: ["Natural Yogurt", 100, "g"],
    3: ["Self-Raising Flour", 265, "g"],
    4: ["Light Muscovado Sugar", 335, "g"],
    5: ["Grated Carrots", 265, "g"],
    6: ["Raisins", 100, "g"],
    7: ["Walnuts", 100, "g"],
    8: ["Lightly Salted Butter", 100, "g"],
    9: ["Icing Sugar", 300, "g"],
    10: ["Soft Cheese", 100, "g"]
};

// Red Velvet Cake Recipe ingredients
var Red_Velvet_Cake = {
    1: ["Self-Raising Flour", 2, "cups"],
    2: ["White Sugar", 2, "cups"],
    3: ["Buttermilk", 1, "cups"],
    4: ["Coconut Oil", 0.5, "cups"],
    5: ["Coffee", 1, "cups"],
    6: ["Whipping Cream", 1.5, "cups"],
    7: ["Cream Cheese", 16, "oz"],
    8: ["Lightly Salted Butter", 100, "g"],
    9: ["Icing Sugar", 1.5, "cups"],
};

// Vanilla Sponge Cake Recipe ingredients
Recipes.Vanilla_Sponge_Cake = {
    1: ["Golden Caster Sugar", 250, "g"],
    2: ["Self-Raising Flour", 255, "g"],
    3: ["Plain Flour", 85, "g"],
    4: ["Full-Fat Greek Yogurt", 100, "g"]
};

Recipes.step_time = function (R, n) {

    let Current_Step = R[n];
    let Current_Ingredient = Current_Step[0];
    let Current_Amount = Current_Step[1];
    let Current_Unit = Current_Step[2];
    let add_word = "add ";
    let message = add_word.concat(String(Current_Amount), String(Current_Unit), " of ", String(Current_Ingredient));
    console.log(message);
    let p = Densities[Current_Ingredient];
    let m = Current_Amount;
    let h;
    let t;
    if (Current_Unit == "g") {
        h = 100 - m / ((p / 1000) * Math.PI * (57 ** 2));
        t = h / 25;
    } else if (Current_Unit == "cups") {
        m = m * 120;
        h = 100 - m / ((p / 1000) * Math.PI * (57 ** 2));
        t = h / 25;
    } else if (Current_Unit == "oz") {
        m = m * 28.3495;
        h = 100 - m / ((p / 1000) * Math.PI * (57 ** 2));
        t = h / 25;
    } else {
        h = 100 - m / ((1 / 1000) * Math.PI * (57 ** 2));
        t = h / 25;
    }
    console.log(t);
    return t;
}

/* Recipe_Step_Time(Vanilla_Sponge_Cake, 2); */

export default Object.freeze(Recipes);