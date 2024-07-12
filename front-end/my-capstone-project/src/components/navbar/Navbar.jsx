import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit'
import './navbar.css';


const navbar = () => {

    const ceckLog = (url) => {
      if(localStorage.getItem("auth")){
        return url
        
      }else {
        return "/login"
      }
    }

    return (
        <Container >
            <Navbar expand="lg" className="navColor ">
                <Navbar.Brand  ><img className='logoImg' src="/asset/logoTrinacria.png" alt="logo" /></Navbar.Brand>
                <Link className='nav-link linkAnimation' to="/">Home</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-link linkAnimation' to= {ceckLog("/città")}>Città</Link>
                    <Link className='nav-link linkAnimation' to={ceckLog("/collegamenti")}>Collegamenti</Link>
                    <Link className='nav-link linkAnimation' to={ceckLog("/aggiungiCittà")}>Aggiungi Città</Link>
                    <Link className='nav-link linkAnimation' to="/contatti">Contatti</Link>
                </Nav>
            </Navbar.Collapse>
            <Link className='nav-link gap m-2 linkAnimation' to="/register">Register</Link>
            <Link className='nav-link  gap m-2 linkAnimation' to="/login">Login</Link>
            <Link className='nav-link gap m-2 linkAnimation' to="/profile"><MDBIcon fas icon="user-alt" /></Link>
        </Navbar>
        </Container >
    );
}

export default navbar;