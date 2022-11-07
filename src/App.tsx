import { Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
function App() {

  return (
    <ShoppingCartProvider>
      <Navbar/>
            <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/store" element={<Store/>} />
               <Route path="/about" element={<About/>} />
            </Routes>
      <Footer/>
    </ShoppingCartProvider>
  )
}

export default App