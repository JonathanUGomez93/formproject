import { useState } from "react"

function ItemCount() {
    const [value, setValue] = useState(1)

    const addItem = () => {
        setValue(value +1)
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