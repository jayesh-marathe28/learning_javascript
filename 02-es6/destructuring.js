// ==========================================
// Destructuring
// ==========================================


// Object destructuring

const student = {
    name: "Jayesh",
    age: 22,
    city: "Jalgaon"
};

const { name, age, city } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);


// Array destructuring

const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log("A:", a);
console.log("B:", b);
console.log("C:", c);