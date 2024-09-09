import { Link } from "react-router-dom"
import '../../styles/navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/login">Inicia Sesión</Link>
            <Link to="/register">Registrate</Link>
        </div>
    )
}

export default Navbar