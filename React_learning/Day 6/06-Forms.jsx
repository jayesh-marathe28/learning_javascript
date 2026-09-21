import React, { useState } from "react";

function Forms() {
    const [name, setName] = useState("");

    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <p>Hello {name}</p>
        </div>
    );
}

export default Forms;