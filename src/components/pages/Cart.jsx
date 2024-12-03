import '../../styles/cart.css'
import { context } from '../CustomProvider'
import { useContext } from 'react'

const Cart =() => {
  const { loguedUser } = useContext(context)
  //muestra sólo al user logueado
  return (
    <>
      <div>
        <h1>¡Bienvenido, { loguedUser.user}!</h1>
      </div>
    </>
    )
  }
export default Cart