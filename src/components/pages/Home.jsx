import '../../styles/home.css'
import Banner from '../Banner'

const Home = () => {
    return (
        <>
            <h1 className='projectTitle'>Grana Store</h1>
            <Banner />
            <h2 className='projectTitle'>Productos destacados</h2>
            <div className='productsPreview'>
                <img src="../images/train5.png" alt="camiseta lanus" />
                <img src="../images/train6.png" alt="camiseta alternativa" />
                <img src="../images/train7.png" alt="" />
                <img src="../images/train4.png" alt="" />
            </div>
        </>
    )
}
export default Home