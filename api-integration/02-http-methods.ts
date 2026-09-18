// 02-http-methods.ts

// GET
const getRequest = {
    method: "GET",
    url: "/users"
};

console.log(getRequest);


// POST
const postRequest = {
    method: "POST",
    url: "/users",
    data: {
        name: "Jayesh",
        email: "jayesh@gmail.com"
    }
};

console.log(postRequest);


// PUT
const putRequest = {
    method: "PUT",
    url: "/users/1",
    data: {
        name: "Jayesh Marathe"
    }
};

console.log(putRequest);


// DELETE
const deleteRequest = {
    method: "DELETE",
    url: "/users/1"
};

console.log(deleteRequest);