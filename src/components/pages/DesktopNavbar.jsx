import { Link } from "react-router-dom";
import '../../styles/desktopNavbar.css';

function DesktopNavbar() {
  return (
    <div className="desktopNavbar">
      <Link className="navigation" to="/">Home</Link>
      <div className="navOptions">
        <p className="navigation">Productos</p>
        <div className="dropdown">
          <div className="dropdownOptions">
            <Link to="/camisetas">Camisetas</Link>
            <Link to="/shorts">Shorts</Link>
            <Link to="/products">Todo</Link>
          </div>
        </div>
      </div>
      <Link className="navigation" to="/account">Cuenta</Link>
    </div>
  );
}
export default DesktopNavbar;