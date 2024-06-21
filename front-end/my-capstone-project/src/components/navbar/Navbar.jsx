import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const navbar = () => {
    return (
        <Navbar expand="lg" className="bg bg-dark-subtle">
            <Container>
                <Navbar.Brand >LOGO</Navbar.Brand>
                <Link className='nav-link' to="/">Home</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/città">Città</Link>
                        <Link className='nav-link' to="/attivitàtematiche">Attivatà Tematiche</Link>
                        <Link className='nav-link' to="/collegamenti">Collegamenti</Link>
                        <Link className='nav-link' to="/contatti">Contatti</Link>
                    </Nav>
                </Navbar.Collapse>
                <Link className='nav-link gap m-2' to = "/register">Register</Link>
                <Link className='nav-link m-2'to = "/login">Login</Link>
                <Link className='nav-link'to = "/profile">Profilo</Link>

            </Container>
        </Navbar>
    );
}

export default navbar;