import { useState } from "react";

function useCounter() {
    const [count, setCount] = useState(0);

    return {
        count,
        increase: () => setCount(count + 1)
    };
}

function Counter() {
    const { count, increase } = useCounter();

    return (
        <>
            <h2>{count}</h2>
            <button onClick={increase}>+</button>
        </>
    );
}

export default Counter;