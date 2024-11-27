import { Link } from "react-router-dom";
import '../../styles/desktopNavbar.css';
import { context } from '../CustomProvider'
import { useContext } from 'react'

function DesktopNavbar() {
  const { loguedUser } = useContext(context);
  console.log(loguedUser)

  const cartValue = loguedUser.cart.length
  //ponerle el  useeffect a cartValue para que se redibuje cada vez que loguedUser.cart se modifique

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
            <Link to="/cart">Carrito ({cartValue.lenght === 0 ? cartValue : "0"})</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DesktopNavbar;