import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';import NavBar from './components/NavBar';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContext from './Context/CartContext'
import Cart from './components/Cart/Cart';

function App() {

  return (
    <CartContext>
      <div className='App'>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/Home" element={<ItemListContainer/>} />
            <Route path="/Categoria/:categoria" element={<ItemListContainer/>} />
            <Route path="/Producto/:id" element={<ItemDetailContainer />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContext>
    
  );
}

export default App;
