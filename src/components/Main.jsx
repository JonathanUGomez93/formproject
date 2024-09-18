import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Account from "./pages/Account"
import Products from "./pages/Products"
import Detail from "./pages/ProductDetail"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/account" element={<Account />} />
                <Route path="products" element={<Products />} />
                <Route path="products/:id" element={<Detail />} />
                {/* route 404 */}
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </main>
    )
}

export default Main