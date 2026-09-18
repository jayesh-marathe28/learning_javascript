// 09-file-upload.ts

import axios from "axios";


// File upload function

async function uploadImage(file: File): Promise<void> {

    const formData = new FormData();

    formData.append("image", file);


    try {

        const response = await axios.post(
            "https://example.com/upload",
            formData
        );

        console.log("Upload successful");

        console.log(response.data);

    } catch (error) {

        console.log("Upload failed");

    }
}