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
            <Link to="/shirts">Remeras</Link>
            <Link to="/jersey">Equipación</Link>
            <Link to="/training">Deportivo</Link>
            <Link to="/products">Todo</Link>
          </div>
        </div>
      </div>
      <Link className="navigation" to="/account">Cuenta</Link>
    </div>
  );
}
export default DesktopNavbar;