import '../../styles/detail.css'
import products from '../utils/products'
import ItemCount from '../utils/ItemCount'
import { useParams } from 'react-router-dom'
import { context } from '../CustomProvider'
import { useContext, useState } from 'react'

function Detail() {
  const { loguedUser } = useContext(context)
  const { id } = useParams()
  const product = products.find(product => product.id === parseInt(id))
  const [value, setValue] = useState(1);

  const pushToCart = () => {
    const productExists = loguedUser.cart.findIndex(item => item.id === parseInt(id))
    console.log(' PRODUCT EXISTS?',productExists)
    if (productExists !== -1) { 
      loguedUser.cart[productExists].quantity += value;
      loguedUser.cart[productExists].totalPrice += product.precio * value;
      console.log('CARRITO DEL USUARIO LOGUEADO', loguedUser.cart)
    } else {
      const productoToPush = {
        id: product.id,
        name: product.nombre,
        quantity: value,
        totalPrice: product.precio * value
      }
      loguedUser.cart.push(productoToPush)
      console.log('PRODUCTO QUE PUSHEO', product)
      console.log('COMO LO PUSHEO', productoToPush)
      console.log('CARRITO DEL USUARIO LOGUEADO', loguedUser.cart)
    }
  }
  return (
    <>
      <h1 className='detailTitle'>{product.nombre}</h1>
      <div className='container'>
        <div className='productInformation'>
          <img src={product.img} alt={product.nombre} />
        </div>
        <div className='productInteraction'>
          <p className='productPrice'>$ {product.precio} c/u</p>
          <p className='productDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quaerat at porro voluptatem, saepe labore placeat officia voluptatibus excepturi quos dicta repellendus. Velit quia eveniet deleniti corporis maiores non aliquam.</p>
          <ItemCount value={value} setValue={setValue} product={product} />
          <p>Stock Disponible: {product.stock}</p>
          <button className='addToCart' onClick={pushToCart}>Añadir al Carrito</button>
        </div>
      </div>
    </>
  )
}
export default Detail