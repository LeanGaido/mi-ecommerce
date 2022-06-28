import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, getDoc, getFirestore, where } from "firebase/firestore";

function ItemDetailContainer() {
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [result, setResult] = useState([]);
      
    // Initialize Firebase
    const app = initializeApp({
        apiKey: "AIzaSyBx2-rckKzJJrQY_P_6f4ffyIreRlv0FeQ",
        authDomain: "abstract-mode-334421.firebaseapp.com",
        projectId: "abstract-mode-334421",
        storageBucket: "abstract-mode-334421.appspot.com",
        messagingSenderId: "765009979449",
        appId: "1:765009979449:web:e70d64445dcbdaff9c05e8",
        measurementId: "G-M8GRSPJ2GM"
    });

    const analytics = getAnalytics(app);

    const getData = async(_id) => {
        console.log(_id);
        setLoading(true);
        setResult([]);

        try {
            const _db = getFirestore();
            const _item = doc(_db, "productos", _id);
            getDoc(_item).then((snapshot) => {
                setResult({ Id: snapshot.id, ...snapshot.data() });
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            }).finally(() => {
                console.log(result);
                setLoading(false);
            });

            // docSnap.then((respuesta) => {
            //     console.log(respuesta);
            //     setResult(respuesta.find(item => item.Key == _key));
            // }).catch((error) => {
            //     setError(true);
            // }).finally(() => {
            //     setLoading(false);
            // })
        } catch (error) {
            
        }
    }

    useEffect(() => {
      getData(id);
    }, [id])

    return (
        <Container className="Items-Container">
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
                        <ItemDetail item={ result }/>
                    }
                </div>
            }
        </Container>
        
    );
}

export default ItemDetailContainer;