import { Link, Outlet } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import '../App.css'

export default function Layout() {
  return (
    <>
      <Navbar bg="light" expand="md" className="mb-4 shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">Girls Who Code</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about/">About</Nav.Link>
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
