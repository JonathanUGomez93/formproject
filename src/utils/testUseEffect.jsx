import { useEffect, useState } from "react"

function TestUseEffect() {
    const [datos, setDatos] = useState(null);

    //llamo a la api jsonplaceholder
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/5')
            .then(response => response.json())
            .then(data => setDatos(data))
        }, [])
    return (
        <div>
            {datos ? (
                <div>
                    <h1>Datos obtenidos:</h1>
                    <pre>{JSON.stringify(datos, null, 2)}</pre>
                </div>
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
    )
}
export default TestUseEffect