// 04-status-codes.ts

const statusCodes = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,

    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,

    SERVER_ERROR: 500
};

console.log(statusCodes);


// Simple function

function checkStatus(status: number): void {

    if (status === 200) {
        console.log("Success");
    }
    else if (status === 201) {
        console.log("Created successfully");
    }
    else if (status === 400) {
        console.log("Bad Request");
    }
    else if (status === 401) {
        console.log("Unauthorized");
    }
    else if (status === 403) {
        console.log("Forbidden");
    }
    else if (status === 404) {
        console.log("Not Found");
    }
    else if (status === 500) {
        console.log("Server Error");
    }
}

checkStatus(200);
checkStatus(404);
checkStatus(500);
