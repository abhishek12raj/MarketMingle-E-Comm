import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Product from './component/Product';
import Login from './component/Login';
import Register from './component/Register';
import Cart from './component/Cart';
import { CartProvider } from './component/CartContext';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product searchTerm={searchTerm} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
