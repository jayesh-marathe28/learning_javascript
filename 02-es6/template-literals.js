// ==========================================
// Template Literals
// ==========================================

const name = "Jayesh";
const age = 22;
const city = "Jalgaon";


// Old method

console.log(
    "My name is " + name +
    " and my age is " + age
);


// Template literal

console.log(`My name is ${name} and my age is ${age}`);


// More information

console.log(
    `My name is ${name}, I am ${age} years old, and I live in ${city}.`
);
