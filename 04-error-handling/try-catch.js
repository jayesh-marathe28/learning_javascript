// ==========================================
// Try / Catch
// ==========================================

try {

    const result = userName;

    console.log(result);

} catch (error) {

    console.log("Something went wrong");

    console.log("Error message:", error.message);
}


// Another example

try {

    const number = 10;

    if (number > 5) {
        throw new Error("Number is greater than 5");
    }

} catch (error) {

    console.log("Caught Error:", error.message);
}