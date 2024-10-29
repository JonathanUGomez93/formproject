import { Link } from "react-router-dom";
import '../../styles/desktopNavbar.css';

function DesktopNavbar() {
  return (
    <div className="desktopNavbar">
      <Link className="navigation" to="/">Home</Link>
      <div className="navOptions">
        <p className="navigation">Indumentaria</p>
        <div className="dropdown">
          <div className="dropdownOptions">
            <Link to="/products/urbano">Urbano</Link>
            <Link to="/products/equipacion">Equipación</Link>
            <Link to="/products/deportivo">Deportivo</Link>
            <Link to="/products">Todo</Link>
          </div>
        </div>
      </div>
      <div className="navOptions">
        <p className="navigation">Cuenta</p>
        <div className="dropdown">
          <div className="dropdownOptions">
            <Link to="/account">Mi Cuenta</Link>
            <Link to="/cart">Carrito(0)</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DesktopNavbar;