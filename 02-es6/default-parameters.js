// ==========================================
// Default Parameters
// ==========================================

function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet("Jayesh");

greet();


// Another example

function calculatePrice(price, tax = 18) {

    return price + (price * tax / 100);
}

console.log("Price:", calculatePrice(1000));

console.log("Price with 10% tax:", calculatePrice(1000, 10));