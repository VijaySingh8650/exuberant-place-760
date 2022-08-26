import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Page404 from '../Components/Page404'
import Register from '../Components/Register'
import Braceletes from './Braceletes'
import Cart from './Cart'
import Earrings from './Earrings'
import Home from './Home'
import Necklaces from './Necklaces'
import New from './New'
import PrivateRoute from './PrivateRoute'

import AllProducts from './AllProducts'
import ShopAll from './ShopAll'


export default function Router() {
  return (
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/new" element={<New/>} />
          <Route path="/shopall" element={<ShopAll/>} />
          <Route path="/earrings" element={<Earrings/>} />
          <Route path="/necklaces" element={<Necklaces/>} />
          <Route path="/bracelets" element={<Braceletes/>} />
          
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
      <Route path="/allproducts" element={<AllProducts />} />
      <Route path="/*" element={<Page404/>} />
      <Route path="/cart" element={
        // <PrivateRoute>

        // </PrivateRoute>
          <Cart />
      } />
    </Routes>
  )
}

