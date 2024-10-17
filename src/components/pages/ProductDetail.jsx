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
          <div className='productPrice'>$ {product.precio} c/u</div>
          <ItemCount />
          <div>Stock Disponible: {product.stock}</div>
          <button className='buyButton'>COMPRAR</button>
        </div>
      </div>
    </>
    )
  }
export default Detail