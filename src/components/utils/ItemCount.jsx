import PropTypes from "prop-types";

function ItemCount({ value, setValue, product }) {

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
ItemCount.propTypes = {
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
}

export default ItemCount