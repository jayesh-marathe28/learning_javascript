// ==========================================
// Fetch API
// ==========================================

async function getUsers() {

    try {

        const response = await fetch(
            "https://example.com/api/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log("Error:", error.message);

    }
}


getUsers();