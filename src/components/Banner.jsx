import '../styles/banner.css'
import { useEffect, useState } from 'react'

const Banner = () => {
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
            <div className="banner">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt=""
                        className={index === active ? 'active' : 'inactive'}
                    />
                ))}
            </div>
        </>
    )
}

export default Banner