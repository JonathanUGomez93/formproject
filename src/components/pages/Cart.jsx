import '../../styles/cart.css';
import { context } from '../CustomProvider';
import { useContext } from 'react';

const Cart = () => {
  const { loguedUser } = useContext(context);
  const subtotal = loguedUser.cart.reduce((acumulado, item)=> (acumulado + item.totalPrice), 0)

  return (
    <>
      <div>
        <h1>¡Bienvenido, {loguedUser.user}!</h1>
        <div>
          {loguedUser.cart.length > 0 ? (
            loguedUser.cart.map((item, index) => (
              <div className='itemsContainer' key={index}>
                <div className='imageContainer'><img src={item.img} alt="" /></div>
                <div className='itemInfoContainer'>
                  <h5>{item.name}</h5>
                  <h5>${item.unitPrice} x { item.quantity}</h5>
                </div>
              </div>
            ))
          ): <p>JIJAZO</p>}
        </div>
        <div>
          <h2>Subtotal: ${subtotal}</h2>
        </div>
        <div>
          Gastos de Envío: {subtotal > 100000 ? (
            <h2>$0</h2>
          ):<h2>$10000</h2> }
        </div>
        <div>
          Código de Descuento
        </div>
        <div>
          TOTAL A PAGAR: 
        </div>
      </div>
    </>
  );
};

export default Cart;