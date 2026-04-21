import { Container, Row, Col } from 'react-bootstrap'
import footerImg from '../images/gwc_footer.png'

export default function SiteFooter() {
  const style = {
    backgroundImage: `linear-gradient(rgba(255,255,255,0.18), rgba(255,255,255,0.18)), url(${footerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <footer className="footer mt-5 py-4" role="contentinfo" style={style}>
      <Container>
        <Row>
          <Col md={6}>
            <strong>Girls Who Code Club</strong>
            <div>Contact: <a href="mailto:girlswhocode.uw@gmail.com" aria-label="Email girls who code">girlswhocode.uw@gmail.com</a></div>
          </Col>
          <Col md={6} className="text-md-end">
            <nav aria-label="social links">
              <div>Follow us: <a className="footer-link" href="https://discord.gg/bsDEGam732" target="_blank" rel="noopener noreferrer" aria-label="Open Discord in new tab">Discord</a> • <a className="footer-link" href="https://www.instagram.com/girlswhocode.uw/" target="_blank" rel="noopener noreferrer" aria-label="Open Instagram in new tab">Instagram</a></div>
            </nav>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
