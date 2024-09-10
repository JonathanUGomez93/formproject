import '../styles/footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='socials socials-margin'>
                <a href="https://github.com/JonathanUGomez93" target='_BLANK'><img src="../images/1.png" alt="link github" /></a>
                <a href="https://www.linkedin.com/in/gomezjonathanwd/" target='_BLANK'><img src="../images/2.jpg" alt="link linkedin" /></a>
                <a href="https://wa.me/1124742464" target='_BLANK'><img src="../images/3.png" alt="link whatsapp" /></a>
            </div>
            <p className='socials-margin'>Todos los derechos e izquierdos reservados</p>
        </footer>
    )
}
export default Footer