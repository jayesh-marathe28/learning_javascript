// ==========================================
// JSON
// ==========================================


// JavaScript object

const user = {
    name: "Jayesh",
    age: 22,
    city: "Jalgaon"
};


// Object -> JSON string

const jsonData = JSON.stringify(user);

console.log("JSON String:");
console.log(jsonData);


// JSON string -> Object

const convertedUser = JSON.parse(jsonData);

console.log("JavaScript Object:");
console.log(convertedUser);


// Access object property

console.log("Name:", convertedUser.name);
console.log("Age:", convertedUser.age);
console.log("City:", convertedUser.city);