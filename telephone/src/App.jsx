import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import Shop from './pages/shop/shop'
import Cart from './pages/cart/cart'
import { ShopContextProvider } from './context/context-shop'
import { Contact } from './pages/contact'
import Home from './pages/home'
import InfoProduct from './pages/infoProduct/infoProduct'

function App() {
 return (
    <ShopContextProvider>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop title="Shop" />}/> 
                <Route path="/product/:id" element={<InfoProduct/>}/> 
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </Router>
    </ShopContextProvider>

 )
}

export default App
