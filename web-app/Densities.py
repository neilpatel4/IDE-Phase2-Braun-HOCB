import math

Densities = {
    "Water": 1,
    "Self-Raising Flour": 0.512,
    "Caster Sugar": 0.77,
    "Golden Caster Sugar": 0.77,
    "White Sugar": 1.59,
    "Brown Sugar": 0.721,
    "Cream Cheese": 0.98
}

# Carrot Cake Recipe ingredients
Carrot_Cake = {
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
}

# Red Velvet Cake Recipe ingredients
Red_Velvet_Cake = {
    1: ["Self-Raising Flour", 2, "cups"],
    2: ["White Sugar", 2, "cups"],
    3: ["Buttermilk", 1, "cups"],
    4: ["Coconut Oil", 0.5, "cups"],
    5: ["Coffee", 1, "cups"],
    6: ["Whipping Cream", 1.5, "cups"],
    7: ["Cream Cheese", 16, "oz"],
    8: ["Lightly Salted Butter", 100, "g"],
    9: ["Icing Sugar", 1.5, "cups"],
}

# Vanilla Sponge Cake Recipe ingredients
Vanilla_Sponge_Cake = {
    1: ["Golden Caster Sugar", 250, "g"],
    2: ["Self-Raising Flour", 255, "g"],
    3: ["Plain Flour", 85, "g"],
    4: ["Full-Fat Greek Yogurt", 100, "g"]
}

def Recipe_Step_Time(R, n):
    Current_Step = R[n]
    Current_Ingredient = Current_Step[0]
    Current_Amount = Current_Step[1]
    Current_Unit = Current_Step[2]
    print("Add " + str(Current_Amount) + str(Current_Unit) + " of " + str(Current_Ingredient))
    p = Densities[Current_Ingredient]
    m = Current_Amount
    if (Current_Unit == "g"):
        h = 100 - m/((p/1000)*math.pi*(57**2))
        t = h/25
    elif (Current_Unit == "cups"):
        m = m*120
        h = 100 - m/((p/1000)*math.pi*(57**2))
        t = h/25
    elif (Current_Unit == "oz"):
        m = m*28.3495
        h = 100 - m/((p/1000)*math.pi*(57**2))
        t = h/25
    else:
        h = 100 - m/((1/1000)*math.pi*(57**2))
        t = h/25
    return t

