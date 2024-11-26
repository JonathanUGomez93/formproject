import '../../styles/cart.css'
import { context } from '../CustomProvider'
import { useContext } from 'react'

const Cart =() => {
  const { users } = useContext(context)
  //muestra sólo al user logueado
  return (
    <>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <p>Usuario: {user.user}</p> <p>Email: {user.email}</p> <p>Contraseña: {user.password}</p>
            <p>Carrito: {user.cart.length > 0 ? user.cart.join(', ') : 'Carrito vacío'}</p>
          </div>))}
      </div>
    </>
    )
  }
  
export default Cart