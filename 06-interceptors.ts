// 06-interceptors.ts

import axios from "axios";


// REQUEST INTERCEPTOR

axios.interceptors.request.use(

    (config) => {

        console.log("Request is being sent");

        const token = "my-demo-token";

        if (token) {
            config.headers.Authorization =
                `Bearer ${token}`;
        }

        return config;
    },

    (error) => {

        return Promise.reject(error);
    }
);


// RESPONSE INTERCEPTOR

axios.interceptors.response.use(

    (response) => {

        console.log("Response received");

        return response;
    },

    (error) => {

        console.log("Response error");

        return Promise.reject(error);
    }
);


// API CALL

async function getUsers(): Promise<void> {

    try {

        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        console.log(response.data);

    } catch (error) {

        console.log("API Error");

    }
}

getUsers();