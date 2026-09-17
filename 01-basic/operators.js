// ==========================================
// JavaScript Operators
// ==========================================

// Arithmetic Operators

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);


// Assignment Operators

let x = 10;

x += 5;
console.log("After +=:", x);

x -= 3;
console.log("After -=:", x);

x *= 2;
console.log("After *=:", x);

x /= 4;
console.log("After /=:", x);


// Comparison Operators

console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);

console.log("5 == '5':", 5 == "5");
console.log("5 === '5':", 5 === "5");


// Logical Operators

let age = 25;

console.log("AND:", age >= 18 && age <= 60);
console.log("OR:", age < 18 || age > 60);
console.log("NOT:", !(age >= 18));