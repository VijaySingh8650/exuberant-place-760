import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Braceletes from './Braceletes'
import Cart from './Cart'
import Earrings from './Earrings'
import Home from './Home'
import Necklaces from './Necklaces'
import New from './New'
import PrivateRoute from './PrivateRoute'
import Rings from './Rings'
import SearchProducts from './SearchProducts'
import ShopAll from './ShopAll'
import ShopSocial from './ShopSocial'

export default function Router() {
  return (
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/new" element={<New/>} />
          <Route path="/shopall" element={<ShopAll/>} />
          <Route path="/earrings" element={<Earrings/>} />
          <Route path="/necklaces" element={<Necklaces/>} />
          <Route path="/bracelets" element={<Braceletes/>} />
          <Route path="/rings" element={<Rings/>} />
          <Route path="/shopsocial" element={<ShopSocial/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/searchproducts" element={<SearchProducts/>} />
      <Route path="/cart" element={
        // <PrivateRoute>

        // </PrivateRoute>
          <Cart />
      } />
    </Routes>
  )
}

