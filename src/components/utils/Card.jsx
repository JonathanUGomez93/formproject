import PropTypes from 'prop-types';

function Card({ nombre, talle, precio, img }) {
    return (
        <>
            <div>
                <h2>{nombre}</h2>
                <p>Talle: {talle}</p>
                <p>Precio: ${precio}</p>
                <img src={img} alt={nombre} />
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