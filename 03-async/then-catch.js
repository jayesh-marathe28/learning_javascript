// ==========================================
// Promise then() and catch()
// ==========================================

const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Data loaded successfully");
    } else {
        reject("Failed to load data");
    }
});


promise
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });