import Main from "./components/Main"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"
import CustomProvider from "./components/CustomProvider"


function App() {

  return (
    <CustomProvider>
      <BrowserRouter>
        <div className="contentWrapper">
          <Header />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    </CustomProvider>
  )
}

export default App