import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"

import './Navbar.scss'

const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="navbar shadow-sm">
      <Container>
        <Nav className="me-auto">
          <Nav.Link className="nav-link" to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
      
      </Container>
    </NavbarBs>
  )
}
export default Navbar