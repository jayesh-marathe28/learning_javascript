function show<T>(value: T): T {
    return value;
}

console.log(show<string>("Jayesh"));
console.log(show<number>(22));
