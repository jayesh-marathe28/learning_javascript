import axios from "axios";


// LOGIN

async function login(): Promise<void> {

    try {

        const response = await axios.post(
            "https://example.com/login",
            {
                email: "jayesh@gmail.com",
                password: "123456"
            }
        );

        const token = response.data.token;

        console.log("JWT Token:");
        console.log(token);

    } catch (error) {

        console.log("Login failed");

    }
}

login();