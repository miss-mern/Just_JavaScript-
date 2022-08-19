//square function
const square = function(x) {
    return x * x;
}
console.log(square(14));


//power,exponent, base
const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(2, 10));


///BINDINGS AND SCOPES
//|AVOID var LIKE THE PLAGUE!!!!!!
let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
    // → 60
}
console.log(x + z);
//NESTED SCOPE
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

//FUNCTONS AS VALUES
let launchMissiles = function() {
    missileSystem.launch("now");
};
if (safeMode) {
    launchMissiles = function() { /* do nothing */ };
}


//ADDITIONAL EXAMPLES
console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}


//ARROW FUNCTIONS
const makeNoise = () => {
    console.log("Pling!!")
}

const horn = () => {
    console.log("Tooooot")
}


const squares = (x) => {
    return x * x;
};
squares(12);


const powers = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
powers();


//THE CALL STACK
function chicken() {
    return egg();
}

function egg() {
    return chicken();
}
console.log(chicken() + " came first.");