import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';

function ItemListContainer() {
    const { categoria } = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [result, setResult] = useState([]);

    const getData = async(_categoria) => {
        setLoading(true);
        setResult([]);

        try {
            const data = await fetch("/Data/Productos.json")
            const res = new Promise((respuesta, rechazo) => {
                setTimeout(() => {
                    respuesta(data.json());
                }, 3000)
            });

            res.then((respuesta) => {
                console.log(_categoria);
                setResult(respuesta.filter(item => _categoria === undefined ||
                                                   item.Categoria == _categoria));
            }).catch((error) => {
                setError(true);
            }).finally(() => {
                setLoading(false);
            })
        } catch (error) {
        
        }
    }

    useEffect(() => {
      getData(categoria);
    }, [categoria])

    return (
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
                        "Ocurrio un Error al Cargar Los Productos" :
                        <div className="Items-Container">
                            <ItemList grettings= { result }/>
                        </div>
                    }
                </div>
            }
        </Container>
    );
}

export default ItemListContainer;