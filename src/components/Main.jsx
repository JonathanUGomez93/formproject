import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Account from "./pages/Account"
import Products from "./pages/Products"
import Detail from "./pages/ProductDetail"
import Cart from "./pages/Cart"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                {/* contacto, sólo accesible por footer */}
                <Route path="/contact" element={<Contact/>} />
                {/* login y register en una misma vista */}
                <Route path="/account" element={<Account />} />
                {/* carrito de compras */}
                <Route path="/cart" element={<Cart />} />
                {/* todos los productos */}
                <Route path="/products" element={<Products/>} />
                {/* todos los productos de una categoria */}
                <Route path="/products/:category" element={<Products/>} />
                {/* detalle del producto */}
                <Route path="/item/:id" element={<Detail/>} />
                {/* route 404 */}
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </main>
    )
}
export default Main