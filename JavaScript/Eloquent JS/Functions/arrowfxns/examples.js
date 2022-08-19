//example 1
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
//example 2
const square1 = (x) => { return x * x; };

//example 3
const square2 = x => x * x;

//No parameters!!!
const horn = () => {
    console.log("Toot");
};