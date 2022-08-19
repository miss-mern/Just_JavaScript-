/**Write  a program that uses the console.log to pprint all thenumbers from 1-100 with 2 exceptions
 * For numbers divisible by 3 print "Fizz" instead of the number
 * For numbers divisible by 5 print "Buzz" instead of the number
 * 
 * Modify the program to print "FizzBuzz" for numbers divisible by both 3 and 5
 */
//Print the numbers

//Original Work
//|NB| TO AVOID NUMMBERS PRINTING REGARDLESS, INTRODUCE THHE FINAL ELSE CLAUSE TO PRINT NUMBERS

for (number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");

    } else if (number % 5 === 0) {
        console.log("Buzz")
    } else
        console.log(number);
}


///USING A FUNCTION!!!!!!

function FizzyBuzzy(number) {
    for (i = 1; i <= number; i++) {
        if (i % 2 === 0 && i % 7 === 0) {
            console.log("FizzyBuzzy");
        } else if (i % 2 === 0) {
            console.log("Fizzy");
        } else if (i % 7 === 0) {
            console.log("Buzzy")
        } else console.log(i)
    }
}

///ARROW FUNCTION
const fizzBuzz = (number) => {
    for (i = 1; i <= number; i++) {
        if (i % 2 === 0 && i % 7 === 0) {
            console.log("FizzyBuzzy");
        } else if (i % 2 === 0) {
            console.log("Fizzy");
        } else if (i % 7 === 0) {
            console.log("Buzzy")
        } else console.log(i)
    }
}
fizzBuzz();


///USING WHILE LOOP -- still to practice
let num = 1;
while (num <= 10) {
    if (num % 2 === 0 && num % 7 === 0) {
        console.log("Fizz");
    } else console.log(num)

}

function donJazzy(number) {
    for (x = 1; x <= number; x++) {
        if (x % 2 === 0) {
            console.log("Don")
        } else
            console.log(x);
    }
}
donJazzy(20);