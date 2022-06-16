import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';import NavBar from './components/NavBar';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

export const myContext = createContext({});

function App() {
  const [cantCarrito, setCantCarrito] = useState(0);

  return (
    <myContext.Provider value={ {cantCarrito: cantCarrito, setCantCarrito: setCantCarrito}}>
      <div className='App'>
        <BrowserRouter>
          <NavBar cantCarrito={cantCarrito} />
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/Home" element={<ItemListContainer/>} />
            <Route path="/Categoria/:categoria" element={<ItemListContainer/>} />
            <Route path="/Producto/:key" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </myContext.Provider>
    
  );
}

export default App;
