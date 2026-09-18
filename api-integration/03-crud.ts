// 03-crud.ts

interface User {
    id: number;
    name: string;
    email: string;
}

let users: User[] = [
    {
        id: 1,
        name: "Rahul",
        email: "rahul@gmail.com"
    },
    {
        id: 2,
        name: "Amit",
        email: "amit@gmail.com"
    }
];


// CREATE

const newUser: User = {
    id: 3,
    name: "Jayesh",
    email: "jayesh@gmail.com"
};

users.push(newUser);

console.log("After Create:");
console.log(users);


// READ

console.log("Read Users:");
console.log(users);


// UPDATE

const user = users.find(user => user.id === 3);

if (user) {
    user.name = "Jayesh Marathe";
}

console.log("After Update:");
console.log(users);


// DELETE

users = users.filter(user => user.id !== 2);

console.log("After Delete:");
console.log(users);