// ==========================================
// Spread and Rest Operators
// ==========================================


// SPREAD OPERATOR
// Expands values


const firstArray = [1, 2, 3];

const secondArray = [...firstArray, 4, 5];

console.log("First Array:", firstArray);
console.log("Second Array:", secondArray);


// Spread with objects

const user = {
    name: "Jayesh",
    age: 22
};

const newUser = {
    ...user,
    city: "Jalgaon"
};

console.log("New User:", newUser);


// REST OPERATOR
// Collects values

function add(...numbers) {

    console.log("Numbers:", numbers);

    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log("Total:", add(10, 20, 30, 40));