import { Link } from "react-router-dom";
import { useState } from "react";
import '../../styles/mobileNavbar.css';

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className='mobileNavbar'>
        <button className='burgerIcon' onClick={toggleMenu}>X</button>
      </div>
      <div className={`mobileMenuContainer ${isOpen ? 'open' : 'closed'}`}>
        <div className="mobileMenu">
          <Link to="/shirts">Remeras</Link>
          <Link to="/jersey">Equipación</Link>
          <Link to="/training">Deportivo</Link>
          <Link to="/products">Todo</Link>
        </div>
      </div>
    </>
  )
}
export default MobileNavbar