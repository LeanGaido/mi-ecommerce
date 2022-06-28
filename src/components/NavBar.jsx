import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import CartWidget from './CartWidget/CartWidget';
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartContext"
import { useContext,useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
      
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

function NavBar() {
    const { cantCarrito } = useContext(cartContext);

    const [result, setResult] = useState([]);

    useEffect(() => {
        const _db = getFirestore();
        var _query = query(collection(_db, "categorias"));
        
        getDocs(_query).then((snapshot) => {
            setResult(snapshot.docs.map((doc) => ({ Id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
            console.log(error);
        }).finally(() => {
            console.log(result);
        });
    }, [])

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Modachi
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                                {result.map(item => {
                                    return (
                                        <NavDropdown.Item as={Link} to={`Categoria/${item.Key}`}>
                                            {item.Name}
                                        </NavDropdown.Item>
                                    );
                                })}
                                <NavDropdown.Item as={Link} to="/">
                                    Ver Todos
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link><CartWidget cartItems={cantCarrito}></CartWidget></Nav.Link>
                            <Nav.Link><Button variant="outline-info">Login</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;