
import React from 'react';
import {Link} from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap'
import AuthContext from '../Context/AuthContext';

function Menu({statusLogin}) {
  return (
    <AuthContext.Consumer>
        {
          context => 
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                  {
                    !context.userLogin &&
                    <>
                    <Nav.Link as={Link} to="/registrarse">Registro</Nav.Link>
                    <Nav.Link as={Link} to="/ingresar">Ingresar</Nav.Link>
                    </>
                  }
                  {
                    context.userLogin &&
                    <Nav.Link onClick={context.logoutUser} >Salir</Nav.Link>
                  }
              </Nav>
            </Navbar.Collapse>
                  {
                    context.userLogin &&
                    <div>Bienvenidos {context.userInfo.name}!</div>
                  }    
            </Navbar>
        }
    </AuthContext.Consumer>
  );
}

export default Menu;
