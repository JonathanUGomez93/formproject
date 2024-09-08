import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                
                
                
                {/* route 404 */}
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </main>
    )
}

export default Main