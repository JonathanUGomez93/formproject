import '../../styles/detail.css'
import products from '../utils/products'
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eum aliquam vero veniam et numquam velit. Nisi quo perferendis error excepturi fuga nostrum assumenda ea odio quam id! Quisquam, rem?
        </div>
      </div>
    </>
    )
  }
export default Detail