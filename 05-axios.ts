import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";


// GET

async function getUsers(): Promise<void> {

    try {

        const response = await axios.get(API_URL);

        console.log("Users:");
        console.log(response.data);

    } catch (error) {

        console.log("GET Error");

    }
}


// POST

async function createUser(): Promise<void> {

    try {

        const response = await axios.post(API_URL, {
            name: "Jayesh",
            email: "jayesh@gmail.com"
        });

        console.log("Created User:");
        console.log(response.data);

    } catch (error) {

        console.log("POST Error");

    }
}


// PUT

async function updateUser(): Promise<void> {

    try {

        const response = await axios.put(
            `${API_URL}/1`,
            {
                name: "Jayesh Marathe"
            }
        );

        console.log("Updated User:");
        console.log(response.data);

    } catch (error) {

        console.log("PUT Error");

    }
}


// DELETE

async function deleteUser(): Promise<void> {

    try {

        await axios.delete(`${API_URL}/1`);

        console.log("User Deleted");

    } catch (error) {

        console.log("DELETE Error");

    }
}


getUsers();
createUser();
updateUser();
deleteUser();

