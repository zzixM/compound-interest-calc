"use strict";

// Globals 
const doc = document; // shortcut to document object

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

// Run the sumbit event listener
function runSubmit() {
    // get values from the form
    let principalValue = parseFloat(doc.getElementById("principal").value);
    let interestRate = parseFloat(doc.getElementById("rate").value) / 100;
    let frequency = parseInt(doc.getElementById("frequency").value);
    let years = parseInt(doc.getElementById("year").value);
    // log values to console
    console.log("Principal = ", principalValue, "Rate = ", interestRate, "Frequency = ", frequency ,"Years = ", years);
    // call the calculation function
    return calc(principalValue, interestRate, frequency, years);
}

// Run the reset event listener
function runReset() {
    return "Form reset";
}

// Main function for calculations to 2 decimal places
function calc(principalValue, interestRate, frequency, years) {
    let initial = 1 + (interestRate / frequency); // start of calculation 
    let exponent = frequency * years; // exponent value (the ammount of times interest is applied)
    let total = principalValue * powerOf(initial, exponent); // final calculation 
    doc.getElementById("result").innerHTML = "Raw interest = "+ total+ " rounded value "+ Math.round(total); // print result to the page
    // todo: add output to return how much the intrest earned is (principle subtracted)
    console.log("Raw interest = ", total, "rounded value", Math.round(total)); // print result and the rounded value
}

