"use strict";

// Globals 
let principalValue = 1000; // Starting amount 
let interestRate = 0.05; // Interest rate in decimal       
let frequency = 1; // times per year interest is applied
let years = 10; // Number of years to compound

// Function to calculate power
let powerOf = (num, pow) => {
    let result = 1; // result variable
    let i = 0; // iterator variable
    while (i < pow) {
        result = result * num; // multiply by num
        i++; // increment iterator
    }
    return result; // return result
} 

// Main function for calculations to 2 decimal places
function calc() {
    let initial = 1 + (interestRate / frequency); // start of calculation 
    let exponent = frequency * years; // exponent value (the ammount of times interest is applied)
    let total = principalValue * powerOf(initial, exponent); // final calculation
    console.log("Raw interest = ", total, "rounded value", Math.round(total)); // print result and the rounded value
}

calc(); 
