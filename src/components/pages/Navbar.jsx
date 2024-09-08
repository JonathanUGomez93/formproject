import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <ul>
            <Link to="/">Home</Link>
            <Link to="/register">Registrate</Link>
            <Link to="/login">Inicia Sesión</Link>
            <Link to="/us">Nosotros</Link>
        </ul>
    )
}

export default Navbar