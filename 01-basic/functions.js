// ==========================================
// JavaScript Functions
// ==========================================

// 1. Simple function

function greet() {
    console.log("Hello Jayesh");
}

greet();


// 2. Function with parameter

function greetUser(name) {
    console.log("Hello " + name);
}

greetUser("Jayesh");
greetUser("Rahul");


// 3. Function with multiple parameters

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log("Addition:", result);


// 4. Subtraction

function subtract(a, b) {
    return a - b;
}

console.log("Subtraction:", subtract(20, 10));


// 5. Even/Odd function

function checkEvenOdd(number) {

    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));