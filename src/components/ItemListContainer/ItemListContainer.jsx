import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

function ItemListContainer() {
    const { categoria } = useParams();

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

    useEffect(() => {
        setLoading(true);
        setResult([]);

        const _db = getFirestore();
        var _query;
        if(categoria !== undefined){
            console.log(categoria);
            _query = query(collection(_db, "productos"), where("Categoria", "==", categoria));
        } else {
            console.log("No filtro");
            _query = query(collection(_db, "productos"));
        }
        
        getDocs(_query).then((snapshot) => {
            setResult(snapshot.docs.map((doc) => ({ Id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
            console.log(error);
            setError(true);
        }).finally(() => {
            console.log(result);
            setLoading(false);
        });
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