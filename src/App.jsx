import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import AllProducts from './pages/AllProducts'
import Sarees from './pages/Sarees'
import BanarasiSilks from './pages/BanarasiSilks'
import BridalLehengas from './pages/BridalLehengas'
import HeritageWeaves from './pages/HeritageWeaves'
import Lehengas from './pages/Lehengas'
import IndoWestern from './pages/IndoWestern'
import BridalEdit from './pages/BridalEdit'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Profile from './pages/Profile'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/sarees" element={<Sarees />} />
        <Route path="/lehengas" element={<Lehengas />} />
        <Route path="/indo-western" element={<IndoWestern />} />
        <Route path="/bridal-edit" element={<BridalEdit />} />
        <Route path="/banarasi-silks" element={<BanarasiSilks />} />
        <Route path="/bridal-lehengas" element={<BridalLehengas />} />
        <Route path="/heritage-weaves" element={<HeritageWeaves />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
