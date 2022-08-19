let yourName = prompt("What is your name?");
console.log("Your name is" = +yourName);
//conditional execution, if, whiile, do,for loops
let num = Number(prompt("Enter a number:"));
if (num < 10) {
    console.log("Number is Small!")
} else if (num < 100) {
    console.log("Number is Medium!")
} else {
    console.log("Number is Laaarge!!!!")
}
//while loops
let numb = 0;
while (numb <= 12) {
    console.log(numb);
    numb = numb + 2

}
let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);
//do-loops

let yoursName;
do {
    yourName = prompt("Who are you?");
} while (!yoursName);
console.log(yoursName);
//FOR LOOPS=> MY FAVOURITE YET!!!
let results = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
    results = results * 2
}
//SWITCH CASE
switch (prompt("What is the weather today?")) {
    case "rainy":
        console.log("Remember to bring a umbrella");
        break;
    case "sunny":
        console.log("your sundress maam")
    case "windy":
        console.log("Enjoy the breeze!!!!")
        break;
    default:
        console.log("Weather Unknown")
        break;

}