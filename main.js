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
    doc.getElementById("resultCard").classList.add("hide"); // hide the result card by adding the hide class
    doc.getElementById("interest-form").reset(); // reset the form
    console.log("Form reset");
}

// Main function for calculations to 2 decimal places
function calc(principalValue, interestRate, frequency, years) {
    let initial = 1 + (interestRate / frequency); // start of calculation 
    let exponent = frequency * years; // exponent value (the ammount of times interest is applied)
    let total = principalValue * powerOf(initial, exponent); // final calculation 
    doc.getElementById("resultCard").classList.remove("hide"); // show the result card by removing the hide class
    doc.getElementById("result").innerHTML = "Raw interest = "+ total+ " rounded value "+ Math.round(total); // print result to the page
    // todo: add output to return how much the intrest earned is (principle subtracted)
    console.log("Raw interest = ", total, "rounded value", Math.round(total)); // print result and the rounded value
}

// Function to validate input values
// Returns true if all inputs are valid, false if any input is invalid
// Invalid inputs: negative numbers, zero, null, empty strings, strings with only spaces, undefined, NaN
// Valid inputs: positive numbers, non-empty strings
function validateInput(inputValueList) {
    let validated = false;
    let validationList = [];
    let validattionMsg = [];
    for (let i = 0; i < inputValueList.length; i++) {
        if (typeof inputValueList[i] === "number" && inputValueList[i] <= 0 || isNaN(inputValueList[i])){
                validated = false;
        }else if (inputValueList[i] === null || inputValueList === ""){
                validated = false;
        }else if (typeof inputValueList[i] === "string" && inputValueList[i].trim() === ""){
                validated = false;
        }else if (typeof inputValueList[i] === "undefined"){
                validated = false;
        }else {
                validated = true;
        }
        validationList.push(validated);
        validattionMsg.push("Input "+ i+ " is "+ validated+ " Reason "+ typeof inputValueList[i]);
    }   // todo: improve validation messages
        // todo: return which input is invalid
    console.log(validationList);
    console.log(validattionMsg);
    return validated;
}
// todo: remove test code below
let testValue = [undefined, null, "", " ", "1", 1, -1, 0, NaN];
console.log(validateInput(testValue));