import { useState } from "react"
import products from '../utils/products'
import { useParams } from 'react-router-dom'

function ItemCount() {

    const { id } = useParams()
    const product = products.find(product => product.id === parseInt(id))

    const [value, setValue] = useState(1)

    const addItem = () => {
        if (value < product.stock) {
            setValue(value +1)
        }
    }
    const lessItem = () => { 
        if (value > 1) {
            setValue(value - 1)
        }
    }
    return (
        <div className="itemCount">
            <button className="more itemButton" onClick={addItem}>+</button>
            <p className="value"> {value} </p>
            <button className="less itemButton" onClick={lessItem}>-</button>
        </div>
    )
}
export default ItemCount