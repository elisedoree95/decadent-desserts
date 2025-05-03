import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import About from './pages/about/About'
import MainNavigation from './components/MainNav/MainNavigation'
import { CartProvider } from './context/CartContext'
import Footer from './components/Footer/Footer'

function App() {

    return (
        <CartProvider>
            <div className="App">
                <MainNavigation />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/about' element={<About />} />
                </Routes>

            </div>
            <Footer />
        </CartProvider>
    )
}

export default App
