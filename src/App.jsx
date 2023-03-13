import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import OneProduct from './pages/OneProduct'
import SharedLayouts from './pages/SharedLayouts'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <SharedLayouts /> }>
          <Route index element={ <Home /> }></Route>
          <Route path="/products" element={ <Products /> }></Route>
          <Route path="/oneproduct/:productId" element={ <OneProduct /> }></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App