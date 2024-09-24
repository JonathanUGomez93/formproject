import DesktopNavbar from "./desktopNavbar"
import MobileNavbar from "./MobileNavbar"
//import navbar.css
import "../../styles/navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="desktop">
                <DesktopNavbar />
            </div>
            <div className="mobile">
                <MobileNavbar />
            </div>
        </>
    )
}
export default Navbar