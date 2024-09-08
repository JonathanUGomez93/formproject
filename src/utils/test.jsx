import { useState } from "react"

function Test() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>titulo</h1>
            <h2>sub titulo</h2>
            {/* uso use state */}
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </>
    )
}

export default Test