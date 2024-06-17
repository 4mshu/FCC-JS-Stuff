// Get references to HTML elements
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

// Function to convert a single digit to its Roman numeral representation
const convertDigitToRoman = (digit, unit, fiveUnit, tenUnit) => {
    let roman = "";
    if (digit === 9) {
        roman = unit + tenUnit;  // e.g., 9 -> IX
    } else if (digit >= 5) {
        roman = fiveUnit;  // e.g., 6-8 -> V + (I repeated)
        while (digit - 5 > 0) {
            roman += unit;
            digit--;
        }
    } else if (digit === 4) {
        roman = unit + fiveUnit;  // e.g., 4 -> IV
    } else {
        while (digit > 0) {
            roman += unit;  // e.g., 1-3 -> I repeated
            digit--;
        }
    }
    return roman;
};

// Function to convert a number to its Roman numeral representation
const romanConversion = (number) => {
    // Input validation for number range
    if (number <= 0) {
        result.textContent = "Please enter a number greater than or equal to 1";
        return;
    } else if (number >= 4000) {
        result.textContent = "Please enter a number less than or equal to 3999";
        return;
    }

    // Clear previous results
    result.innerText = "";

    // Thousands place conversion
    const thousands = Math.floor(number / 1000);
    number %= 1000;
    result.innerText += "M".repeat(thousands);
    console.log(thousands);

    // Hundreds place conversion
    const hundreds = Math.floor(number / 100);
    number %= 100;
    result.innerText += convertDigitToRoman(hundreds, "C", "D", "M");
    console.log(hundreds);

    // Tens place conversion
    const tens = Math.floor(number / 10);
    number %= 10;
    result.innerText += convertDigitToRoman(tens, "X", "L", "C");
    console.log(tens);

    // Units place conversion
    result.innerText += convertDigitToRoman(number, "I", "V", "X");
    console.log(number);
};

// Function to handle user input and initiate conversion
const checkUserInput = () => {
    const userInput = parseInt(numberInput.value);  // Get user input as integer
    result.innerText = "";  // Clear previous result

    // Validate user input
    if (isNaN(userInput)) {
        result.innerText = "Please enter a valid number";
    } else {
        romanConversion(userInput);  // Convert valid input to Roman numeral
    }
};

// Event listener for button click to trigger conversion
convertBtn.addEventListener("click", checkUserInput);
