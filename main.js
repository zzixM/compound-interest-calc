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
    // list of inputs for validation
    let inputList = [principalValue, interestRate, frequency, years];
    let valid = validateInput(inputList); // validate inputs
    // log values to console
    console.log("Principal =", principalValue, "Rate =", interestRate, "Frequency =", frequency ,"Years =", years);
    if (valid === false) {
        return; // if inputs are invalid, exit the function
    } else {
        // call the calculation function
        calc(principalValue, interestRate, frequency, years);
    }
}

// Function to validate input values
// Returns true if all inputs are valid, false if any input is invalid
// Invalid inputs: negative numbers, zero, null, empty strings, strings with only spaces, undefined, NaN
// Valid inputs: positive numbers, non-empty strings
function validateInput(inputValueList) {
    let validated = false;
    let validationList = [];
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
    }
    // todo: return which input is invalid
    console.log(validationList);
    if(!validationList.includes(false)){
        // if all inputs are valid, show success message
        doc.getElementById("resultCard").classList.remove("fail");
        doc.getElementById("resultCard").classList.add("success");
        validated = true;
    } else {
        // if any input is invalid, show error message
        doc.getElementById("resultCard").classList.remove("success");
        doc.getElementById("resultCard").classList.add("fail");
        doc.getElementById("resultCard").classList.remove("hide");
        doc.getElementById("result").innerHTML = "Please make sure your inputs are numbers greater than 0";
        validated = false;
    }
    return validated; // return the validation result
}

// Run the reset event listener
function runReset() {
    // hide the result card by adding the hide class
    doc.getElementById("resultCard").classList.add("hide");
        doc.getElementById("resultCard").classList.remove("success");
        doc.getElementById("resultCard").classList.remove("fail");
    let inputs = doc.querySelectorAll("#interest-form input"); // reset the form
    inputs.forEach(i => { 
        i.value = "";
    });
}

// Main function for calculations to 2 decimal places
function calc(principalValue, interestRate, frequency, years) {
    let initial = 1 + (interestRate / frequency); // start of calculation 
    let exponent = frequency * years; // exponent value (the ammount of times interest is applied)
    let total = principalValue * powerOf(initial, exponent); // final calculation 
    let accruedIntrest = total - principalValue; // interest earned subtracted from principal
    doc.getElementById("resultCard").classList.remove("hide"); // show the result card by removing the hide class
    doc.getElementById("result").innerHTML = "Raw interest = "+ total+ " rounded value = "+ Math.round(total)+ " intrest accrued ="+ accruedIntrest; // print result to the page
    console.log("Raw interest =", total, "rounded value", Math.round(total), "intrest accrued =", accruedIntrest); // print result and the rounded value
}
