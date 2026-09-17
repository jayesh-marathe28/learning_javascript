interface User {
    name: string;
    age: number;
    email: string;
}

// Partial
let user1: Partial<User> = {
    name: "Jayesh"
};

// Pick
let user2: Pick<User, "name" | "email"> = {
    name: "Jayesh",
    email: "jayesh@gmail.com"
};

// Omit
let user3: Omit<User, "email"> = {
    name: "Jayesh",
    age: 22
};

console.log(user1);
console.log(user2);
console.log(user3);