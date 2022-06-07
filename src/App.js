import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ComponenteTest from './components/Tareas/ComponenteTest';
// import TestPromesas from './components/Tareas/TestPromesas';
import { useState } from 'react';
import TestFetchAPI from './components/Tareas/TestFetchAPI';

function App() {
  const data = [{
      Key: 1, 
      Desc:"Producto 1",
      Img: "1.jpg",
      Stock: 12
  },{
      Key: 2, 
      Desc:"Producto 2",
      Img: "2.jpg",
      Stock: 23
  },{
      Key: 3, 
      Desc:"Producto 3",
      Img: "3.jpg",
      Stock: 34
  },{
      Key: 4, 
      Desc:"Producto 4",
      Img: "4.jpg",
      Stock: 45
  },{
      Key: 5,
      Desc:"Producto 5",
      Img: "5.jpg",
      Stock: 56
  }];
  const [cantCarrito, setCantCarrito] = useState(0);

  return (
    <div className="App">
      <NavBar cantCarrito={cantCarrito} />
      {/*
        <ComponenteTest />
        <TestPromesas />
      */}
      <TestFetchAPI />
      <ItemListContainer grettings={data} 
                         setCantCarrito={setCantCarrito} />
      {/* <header className="App-header">
        <img src="/logo.png" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
