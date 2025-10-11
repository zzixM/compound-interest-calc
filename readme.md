# Compound Interest Calculator 
![Version](https://img.shields.io/badge/version-1.0.5-blue)
A simple **Compound Interest Calculator** built with HTML and JavaScript. This project calculates the future value of an investment based on principal, interest rate, compounding frequency, and time. It’s a simple tool I made while I’m learning JavaScript.   
---
## Updates

- Updated `main.js` - added better input error responses 
- Updated `main.js` - reworked error handaling to display which input is correct/incorect 
- Updated `main.js` - added helper functions to make code more readable
- Updated `main.js` - added reset functionality to `input` elements with `runReset`
- Updated `main.js` - `btn-submit` nolonger atributses `hide` class after a succesful result after resubmited 

---

## Features

- Computes compound interest using a **custom `powerOf` function** (no `Math.pow`).  
- Supports configurable:
	- Principal amount  
    - Annual interest rate  
    - Compounding frequency per year  
    - Investment duration (years)  
- Displays both **raw interest**, **rounded value** and **intrest accrued**  
- Fully client-side — no backend required.  

---

## Project Structure
- `index.html` - Handles input and display (on screen and in console)

- `index.css` - Holds styling for `index.html`

- `main.js` - Main script for the tool

---
## How It Works

The calculator uses the **standard compound interest formula**:
`Total = Principal × (1 + Rate / Frequency)^(Frequency × Years)`

Where:  
- **Principal** = starting amount of money  
- **Rate** = annual interest rate (in decimal, e.g., 5% = 0.05)  
- **Frequency** = number of times interest is applied per year  
- **Years** = duration of the investment

1. **Calculate the base for each compounding period**  
    ```javascript
    let base = 1 + (interestRate / frequency);
    ```
	This represents your money plus the interest for one 		period.

2. **Determine the exponent** 
	```javascript
	let exponent = frequency * years;
	```
	This is the total number of times interest is applied over the investment duration.

3. **Compute Total** 
	```javascript
	let total = principalValue * powerOf(base, exponent);
	```
	Here, `powerOf` is a custom function that multiplies `base` by itself `exponent` times, avoiding the use of `Math.pow`. I avoided using `Math.pow` to enhance my learning and understanding of both JavaScript but also compound interest. 

4. **Compute Total** 
	```javascript
	console.log("Raw intrest = ", total, "rounded value", Math.round(total));
	```
	-   ***Raw interest***: exact value from the calculation
    
	-   ***Rounded value***: simplified number for easy reading

## Future Plans

I plan on adding html and CSS to this project to add interactivity and a realistic UX at a later date. 