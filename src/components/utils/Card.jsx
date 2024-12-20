import PropTypes from 'prop-types';
import '../../styles/card.css'
import { Link } from 'react-router-dom';

function Card({ id, nombre, precio, img }) {
    return (
        <>
            <Link className='cardContainer' to={`/item/${id}`}>
                <img className='cardImg' src={img} alt={nombre} />
                <div className='cardInfo'>
                    <p className='cardName'>{nombre}</p>
                    <p><span className='cardPrice'>${precio}</span></p>
                </div>
            </Link>
        </>
    )
}
Card.propTypes = {
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
};
export default Card;