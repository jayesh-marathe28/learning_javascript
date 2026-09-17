// ==========================================
// Async / Await
// ==========================================

function getData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data received successfully");
        }, 2000);

    });
}


async function loadData() {

    try {

        const data = await getData();

        console.log(data);

    } catch (error) {

        console.log("Error:", error);

    }
}


loadData();