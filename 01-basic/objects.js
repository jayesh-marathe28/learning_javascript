// ==========================================
// JavaScript Objects
// ==========================================

// Create an object

const student = {
    name: "Jayesh",
    age: 22,
    course: "Frontend"
};


// Dot notation

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);


// Bracket notation

console.log("Name:", student["name"]);
console.log("Age:", student["age"]);


// Modify property

student.age = 23;

console.log("Updated Age:", student.age);


// Add property

student.city = "Jalgaon";

console.log("City:", student.city);


// Delete property

delete student.course;

console.log(student);


// Object method

const user = {
    name: "Jayesh",

    greet: function () {
        console.log("Hello " + this.name);
    }
};

user.greet();