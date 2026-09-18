// 08-refresh-token.ts

import axios from "axios";


// Refresh token function

async function refreshAccessToken(): Promise<string> {

    const refreshToken = "my-refresh-token";

    const response = await axios.post(
        "https://example.com/refresh",
        {
            refreshToken: refreshToken
        }
    );

    return response.data.accessToken;
}


// Get protected data

async function getProfile(): Promise<void> {

    try {

        const accessToken = "my-access-token";

        const response = await axios.get(
            "https://example.com/profile",
            {
                headers: {
                    Authorization:
                        `Bearer ${accessToken}`
                }
            }
        );

        console.log(response.data);

    } catch (error) {

        console.log("Access token expired");

        // Get new access token

        const newToken =
            await refreshAccessToken();

        console.log("New Access Token:");
        console.log(newToken);
    }
}

getProfile();