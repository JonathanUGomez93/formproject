import { Link } from "react-router-dom";
import { useState } from "react";
import '../../styles/mobileNavbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { context } from '../CustomProvider'
import { useContext } from 'react'

function MobileNavbar() {
  const { loguedUser } = useContext(context);
  console.log(loguedUser)

  const cartValue = loguedUser.cart.length
  //ponerle el  useeffect a cartValue para que se redibuje cada vez que loguedUser.cart se modifique

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className='mobileNavbar'>
        <button className={`burgerIcon ${isOpen ? 'visibility' : ''}`} onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>
      <div className={`mobileMenuContainer ${isOpen ? 'open' : 'closed'}`}>
        <div className="mobileMenu">
          <button className="burgerIcon" onClick={toggleMenu}>X</button>
          <Link to="/">Home</Link>
          <Link to="/products/urbano">Urbano</Link>
          <Link to="/products/equipacion">Equipación</Link>
          <Link to="/products/deportivo">Deportivo</Link>
          <Link to="/products">Todo</Link>
          <Link to="/account">Cuenta</Link>
          <Link to="/cart">Carrito ({cartValue.lenght === 0 ? cartValue : "0"})</Link>
        </div>
      </div>
    </>
  )
}
export default MobileNavbar
