import PropTypes from 'prop-types';
import '../../styles/card.css'

function Card({ nombre, talle, precio, img }) {
    return (
        <>
            <div className='cardContainer'>
                <p className='cardName'>{nombre}</p>
                <p>Talle: {talle}</p>
                <p className='cardPrice'>Precio: ${precio}</p>
                <img className='cardImg' src={img} alt={nombre} />
            </div>
        </>
    )
}
Card.propTypes = {
    nombre: PropTypes.string.isRequired,
    talle: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
};
export default Card;