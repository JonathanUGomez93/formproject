import { Link } from "react-router-dom";
import { useState } from "react";
import '../../styles/mobileNavbar.css';
import { GiHamburgerMenu } from "react-icons/gi";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className='mobileNavbar'>
        <button className='burgerIcon' onClick={toggleMenu}><GiHamburgerMenu />
        </button>
      </div>
      <div className={`mobileMenuContainer ${isOpen ? 'open' : 'closed'}`}>
        <div className="mobileMenu">
          <button className="burgerIcon" onClick={toggleMenu}>X</button>
          <Link to="/">Home</Link>
          <Link to="/shirts">Urbano</Link>
          <Link to="/jersey">Equipación</Link>
          <Link to="/training">Deportivo</Link>
          <Link to="/products">Todo</Link>
        </div>
      </div>
    </>
  )
}
export default MobileNavbar