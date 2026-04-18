import { Outlet, NavLink, Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import '../App.css'

export default function Layout() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Girls Who Code</Navbar.Brand>
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
              <Nav.Link as={NavLink} to="/board">
                Board
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <Outlet />
      </main>
    </>
  )
}
