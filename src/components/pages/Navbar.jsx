import { Link } from "react-router-dom"
import '../../styles/navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/products">Productos</Link>
                <Link to="/account">Cuenta</Link>
            </div>
        </>
    )
    //dropdown en productos separado por tipo de equipacion y cuenta llega a una pagina compartida de logueo/registro.
}

export default Navbar