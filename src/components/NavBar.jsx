import { Navbar, Container, Nav, NavDropdown, Form, Button } from "react-bootstrap";

function NavBar() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Modachi
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Inicio</Nav.Link>
                        <Nav.Link href="#action2">Ofertas</Nav.Link>
                        <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">
                                Remeras
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Buzos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                Camperas
                            </NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="#action6">
                                Pantalones
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="outline-info">Login</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}

export default NavBar;