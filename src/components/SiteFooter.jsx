import { Container, Row, Col } from 'react-bootstrap'

export default function SiteFooter() {
  return (
    <footer className="footer bg-light mt-5 py-4">
      <Container>
        <Row>
          <Col md={6}>
            <strong>Girls Who Code Club</strong>
            <div>Contact: girlswhocode.uw@gmail.com</div>
          </Col>
          <Col md={6} className="text-md-end">
            <div>Follow us: <a href="https://discord.gg/bsDEGam732">Discord</a> • <a href="https://www.instagram.com/girlswhocode.uw/">Instagram</a></div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
