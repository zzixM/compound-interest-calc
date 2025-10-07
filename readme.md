# Compound Interest Calculator 
![Version](https://img.shields.io/badge/version-1.0.3-blue)
A simple **Compound Interest Calculator** built with HTML and JavaScript. This project calculates the future value of an investment based on principal, interest rate, compounding frequency, and time. It’s a simple tool I made while I’m learning JavaScript.   
---
## Updates

- Updated `index.html` - `form` field changed to `div`
- Updated `index.html` - `btn-submit` id changed from `type="submit"`
- Updated `index.html` - added event listeners
	- `btn-submit` - `runSubmit`
	- `btn-reset` - `runReset` curently returns string `"Form reset"`
- Updated `main.js` - all input elements values are now stored in
- Updated `main.js`, `index.hrml` - all inputs now calculate output and are dispalyed
- Updated `index.css` - added media querry for smaller screen bellow `500px`
- Updated `index.css` - added hide class for displaying `result`
- Updated `index.xss` - styling for `resultCard`
- Updated `main.js` - added code to remove `hide` class in `runSubmit` function
- Updated `main.js` - added code to add `hide` class in `runReset` function
- Updated `main.js` - added reset fuctionality to `runReset` function
- Updated `main.js` - added `validateInput` for quality assurence (Still being tested)
- Updated `main.js` - added `accruedIntrest` for better value brakedown


---

## Features

- Computes compound interest using a **custom `powerOf` function** (no `Math.pow`).  
- Supports configurable:
	- Principal amount  
    - Annual interest rate  
    - Compounding frequency per year  
    - Investment duration (years)  
- Displays both **raw interest** and **rounded value**.  
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