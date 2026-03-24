import { useState } from 'react'
import '../App.css'
import { Button, Card, Container, Row, Col, ListGroup } from 'react-bootstrap'

export default function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="hero bg-light py-5 mb-4">
        <Container>
          <h1 className="display-5">Girls Who Code at UW-Madison</h1>
          <p className="lead">Sign up for our email list below to receive updates about events and opportunities!</p>
          <div>
            <Button
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLScHdkVhut9_u-xPDwN47lg9f5wrcHeEhpip3D2OJIlYLVceRA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="me-2"
            >
              Email List Sign-Up
            </Button>
          </div>
        </Container>
      </header>

      <Container>
        <section className="section" id="why-join">
          <h2>Why Join GWC?</h2>
          <Row>
            <Col md={4} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Learn Practical Skills</Card.Title>
                  <Card.Text>Workshops cover web dev, Python, Git, and more.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Build Your Resume</Card.Title>
                  <Card.Text>Add your experience to your resume and stand out to employers!</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Join A Community</Card.Title>
                  <Card.Text>Make friends in your classes, share experiences, and support fellow Women in Computer Science.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="section" id="programs">
          <h2>Programs & Activities</h2>
          <ListGroup>
            <ListGroup.Item>Bi-weekly meetings (social and academic)</ListGroup.Item>
            <ListGroup.Item>Course Selection Help</ListGroup.Item>
            <ListGroup.Item>Career fair workshops and resume reviews</ListGroup.Item>
            <ListGroup.Item>Movie nights and game nights</ListGroup.Item>
            <ListGroup.Item>...And more!</ListGroup.Item>
          </ListGroup>
        </section>

        <section className="section" id="events">
          <h2>Upcoming Events</h2>
          <Row>
            <Col md={6} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Intro to HTML & CSS</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Apr 2 • 5:00 PM</Card.Subtitle>
                  <Card.Text>Hands-on workshop for beginners. No experience required.</Card.Text>
                  <Button variant="primary">RSVP</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Project Night: Build a Portfolio</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Apr 9 • 6:00 PM</Card.Subtitle>
                  <Card.Text>Bring your laptop and start a simple portfolio site.</Card.Text>
                  <Button variant="primary">RSVP</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

      </Container>

      <footer className="footer bg-light mt-5 py-4">
        <Container>
          <Row>
            <Col md={6}>
              <strong>Girls Who Code at UW-Madison</strong>
              <div>Contact us: girlswhocode.uw@gmail.com</div>
            </Col>
            <Col md={6} className="text-md-end">
              <div>Follow us: <a href="https://discord.gg/bsDEGam732">Discord</a> • <a href="https://www.instagram.com/girlswhocode.uw/">Instagram</a></div>
              <div className="mt-2"><small>Code of Conduct • Sponsors</small></div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}
