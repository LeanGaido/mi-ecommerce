import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ComponenteTest from './components/Tareas/ComponenteTest';
// import TestPromesas from './components/Tareas/TestPromesas';
//import TestFetchAPI from './components/Tareas/TestFetchAPI';
import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);
  const [cantCarrito, setCantCarrito] = useState(0);

  const getData = async() => {
    try {
      const data = await fetch("/Data/Productos.json")
      const res = new Promise((respuesta, rechazo) => {
          setTimeout(() => {
            respuesta(data.json());
          }, 3000)
      });

      res.then((respuesta) => {
          console.log(respuesta);
          setResult(respuesta);
      }).catch((error) => {
          setError(true);
      }).finally(() => {
          setLoading(false);
      })

    } catch (error) {
      
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <NavBar cantCarrito={cantCarrito} />
      {/*
        <ComponenteTest />
        <TestPromesas />
        <TestFetchAPI />
      */}
      <Container>
            {
                loading ?
                <Container>
                  <br/>
                  <br/>
                  <Spinner animation="border" role="status" variant="info">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </Container> :
                <div>
                    {
                        error ?
                        "There was an error inthe Payment" :
                        <ItemListContainer grettings={result} 
                                           setCantCarrito={setCantCarrito} />
                    }
                </div>
            }
        </Container>
      
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
