import CardWidget from "../CardWidget/CardWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from './assets/logo_croqueteando.png'
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return(
    <div className="centerNavBar">
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><img className="logoShop" src={logo} alt="cart-logo"/></Navbar.Brand> 
          <Navbar.Brand href="/">Croqueteando.com.mx</Navbar.Brand>       
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             
             <Button variant="outline-light"><NavLink to='/categoria/perros'>Alimento Perros</NavLink></Button>{' '}
             <Button variant="outline-light"><NavLink to='/categoria/gatos'>Alimento Gatos</NavLink></Button>{' '}
             <Button variant="outline-light"><NavLink to='/categoria/accesorios'>Accesorios</NavLink></Button>{' '}
             <Button variant="outline-light"><NavLink to='/categoria/suplementos'>Suplementos</NavLink></Button>{' '}
             
             <Nav.Link href="/">
                <CardWidget/>
            </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
  )
    }
    
    export default NavBar
    