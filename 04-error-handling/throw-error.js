// ==========================================
// Throw Error
// ==========================================

function checkAge(age) {

    if (age < 18) {

        throw new Error(
            "You are not eligible"
        );
    }

    return "Eligible";
}



try {

    console.log(checkAge(15));

} catch (error) {

    console.log("Error:", error.message);
}


// Test with valid age

try {

    console.log(checkAge(22));

} catch (error) {

    console.log("Error:", error.message);
}