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

let getInputElements = () => {
    const interestFormInputs = doc.getElementById("interest-form").querySelectorAll("input");
    let ids = [];
    for (let i = 0; i < interestFormInputs.length; i++) {
        ids.push(interestFormInputs[i].id);
    }
    return ids; // return array of input ids
}

// Functions to add and remove classes
let resetClasses = (id) => {
    let element = doc.getElementById(id);
    element.classList.remove("fail");
    element.classList.remove("success");
}
let addSuccessClass = (id) => {
    let element = doc.getElementById(id);
    element.classList.add("success");
}
let addFailClass = (id) => {
    let element = doc.getElementById(id);
    element.classList.add("fail");
}
let toggleHideClass = (id) => {
    let element = doc.getElementById(id);
    element.classList.toggle("hide");
}

// Run the submit event listener
function runSubmit() {
    getInputElements();
    // get values from the form
    let principalValue = parseFloat(doc.getElementById("principal").value);
    let interestRate = parseFloat(doc.getElementById("rate").value);
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
        interestRate = interestRate / 100; // convert percentage to decimal
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
    let failReason = "";
    let validationList = [];
    let validationMessage = [];
    for (let i = 0; i < inputValueList.length; i++) {
        if (typeof inputValueList[i] === "number" && inputValueList[i] <= 0 ){
                validated = false;
                failReason = "Input must be greater than 0";
        }else if (inputValueList[i] === null || Number.isFinite(inputValueList[i]) === false){
                validated = false;
                failReason = "Input must be a valid number";
        }else if (typeof inputValueList[i] === "string" && inputValueList[i].trim() === ""){
                validated = false;
                failReason = "Input cannot be empty or just spaces";
        }else if (typeof inputValueList[i] === "undefined"){
                validated = false;
                failReason = "No input was provided";
        }else {
                validated = true;
        }
        // Adjust index for user-friendly message (start from 1 instead of 0)
        //if (i === 0){
            //i = 1;
        //}
        validationList.push(validated);
        validationMessage.push("User Input "+ i+ " is "+ validated+ " "+ failReason);
    }
    // todo: return which input is invalid
    console.log(validationList);
    if(!validationList.includes(false)){
        // if all inputs are valid, show success message

        doc.getElementById("resultCard").classList.remove("fail");
        doc.getElementById("resultCard").classList.add("success");
        validated = true;
    } else {
        // get input element ids for error reporting
        let elementIds = getInputElements();
        doc.getElementById("result").textContent = ""; // clear previous messages
        // if any input is invalid, show error message
        doc.getElementById("resultCard").classList.remove("success");
        doc.getElementById("resultCard").classList.add("fail");
        doc.getElementById("resultCard").classList.remove("hide");
        for (let i = 0; i < validationMessage.length; i++) {
            // get the corresponding input element
            let inputElement = document.getElementById(elementIds[i]);
            if (validationMessage[i].includes("false")) {
                // if input is invalid, add fail class
                inputElement.classList.add("fail");
                doc.getElementById("result").innerHTML += validationMessage[i]+ "<br>";
            } else {
                // if input is valid, add success class
                inputElement.classList.add("success");
                doc.getElementById("result").innerHTML += "User Input "+ [i]+ " accepted" +"<br>";
            }
        }
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
    doc.getElementById("result").textContent = "";
    let inputs = doc.querySelectorAll("#interest-form input"); // reset the form
    inputs.forEach(i => { 
        i.value = "";
    });
}

// Main function for calculations to 2 decimal places
function calc(principalValue, interestRate, frequency, years) {
    let initial = 1 + (interestRate / frequency); // start of calculation 
    let exponent = frequency * years; // exponent value (the amount of times interest is applied)
    let total = principalValue * powerOf(initial, exponent); // final calculation 
    let accruedInterest = total - principalValue; // interest earned subtracted from principal
    doc.getElementById("resultCard").classList.remove("hide"); // show the result card by removing the hide class
    doc.getElementById("result").innerHTML = "Raw interest = "+ total+ " rounded value (To 4 Decimal places) "+ total.toFixed(4)+ " interest accrued ="+ accruedInterest; // print result to the page
    console.log("Raw interest =", total, "rounded value (To 4 Decimal places)", total.toFixed(4), "interest accrued =", accruedInterest); // print result and the rounded value
}
