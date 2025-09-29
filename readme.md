# Compound Interest Calculator 
![Version](https://img.shields.io/badge/version-1.0.1-blue)
A simple **Compound Interest Calculator** built with HTML and JavaScript. This project calculates the future value of an investment based on principal, interest rate, compounding frequency, and time. It’s a simple tool I made while I’m learning JavaScript.   
---
## Updates

- Added `index.css`
- Updated `index.html` - `form` field 
- Updated `index.html` - `input` field to `form` ready for input handeling
- Updated `readme.md` - changed `project structure` for better readability
- Updated `index.html` - `link` tags to `head` for fonts sourced at https://fonts.googleapis.com
- Updated `index.html` - `footer` tag ready for a flushed out footer 
- Updated `index.html`, `index.css` - classes to text ready for styling 
- Updated `index.css` - added constructor classes for styling using flexbox
	- Class `flex-container`
	- Class `flex-container-column`


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
- `index.html` - Currently used for console

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