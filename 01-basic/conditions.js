// ==========================================
// JavaScript Conditions
// ==========================================

// 1. if

let age = 20;

if (age >= 18) {
    console.log("Eligible");
}


// 2. if...else

let userAge = 16;

if (userAge >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


// 3. else if

let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}


// 4. Even or Odd

let number = 10;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


// 5. Ternary Operator

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);