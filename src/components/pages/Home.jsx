import '../../styles/home.css'
import { useEffect, useState } from 'react'

const Home = () => {
    const [active, setActive] = useState(0)
    const images = [
        '../images/banner.jpg',
        '../images/banner2.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
          setActive((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
    
        return () => clearInterval(interval);
    }, [images.length]);
    
    return (
        <>
            <h1>Grana Store</h1>
            <div className="banner">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt=""
                        className={index === active ? 'active' : ''}
                    />
                ))}
            </div>
            <h2>Productos destacados</h2>
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