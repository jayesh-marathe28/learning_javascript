// 01-rest-api.ts

// Example of a REST API URL

const apiUrl = "https://example.com/api/users";

console.log("API URL:", apiUrl);

// Example request

const request = {
    method: "GET",
    url: apiUrl
};

console.log("Request:", request);

// Example response

const response = {
    status: 200,
    data: [
        {
            id: 1,
            name: "Jayesh",
            email: "jayesh@gmail.com"
        }
    ]
};

console.log("Response:", response);