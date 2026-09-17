// ==========================================
// Arrow Functions
// ==========================================


// Normal function

function addNormal(a, b) {
    return a + b;
}

console.log("Normal:", addNormal(10, 20));


// Arrow function

const add = (a, b) => {
    return a + b;
};

console.log("Arrow:", add(10, 20));


// Short arrow function

const multiply = (a, b) => a * b;

console.log("Multiply:", multiply(5, 4));


// One parameter

const square = number => number * number;

console.log("Square:", square(5));