import { Outlet, NavLink, Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import '../App.css'
import navLogo from '../images/girlswhocodegwc-logo.png'

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={navLogo} alt="Girls Who Code" className="nav-logo" />
            <span className="visually-hidden">Girls Who Code</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/events">
                Events
              </Nav.Link>
              <Nav.Link as={NavLink} to="/forms">
                Forms
              </Nav.Link>
              <Nav.Link as={NavLink} to="/photos">
                Photos
              </Nav.Link>
              <Nav.Link as={NavLink} to="/board">
                Board
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>

      <main id="main-content">
        <Outlet />
      </main>
    </>
  )
}
