import '../../styles/detail.css'
import products from '../utils/products'
import ItemCount from '../utils/ItemCount'
import { useParams } from 'react-router-dom'

function Detail() {

  const { id } = useParams()
  const product = products.find(product => product.id === parseInt(id))
  
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
          <ItemCount />
          <p>Stock Disponible: {product.stock}</p>
          <button className='addToCart'>Añadir al Carrito</button>
        </div>
      </div>
    </>
  )
}
export default Detail