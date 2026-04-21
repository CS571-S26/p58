import '../App.css'
import Program from '../components/Program'
import RsvpForm from '../components/RsvpForm'
import SiteFooter from '../components/SiteFooter'
import Event from '../components/Event'
import gwc_header from '../images/gwc_header.png'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

export default function HomePage() {
  return (
    <div>
      <img src={gwc_header} alt="Girls Who Code header" className="top-header-img mb-4" />

      <header className="hero bg-light py-4 mb-4">
        <Container>
          <Row className="align-items-center">
            <Col md={7} className="mb-3">
              <h1 className="display-5">Girls Who Code At UW-Madison</h1>
              <p className="lead">
                Join a supportive community of your peers in technology. Workshops, mentorship, and socials help you learn and grow — all majors and skill levels welcome.
              </p>
              <Button href="#forms" variant="primary" className="me-2 hero-cta">Get Involved</Button>
              <Button href="#events" variant="outline-primary">See Events</Button>
            </Col>
            <Col md={5} className="mb-3">
              <Card className="hero-event shadow-sm">
                <Card.Body>
                  <h6 className="text-muted">Upcoming</h6>
                  <Event
                    title="Final Meeting of the Semester"
                    date="Apr 27 • 7:30 PM"
                    description="Celebrate the end of the semester with us! We'll have snacks, games, and a recap of all the great things we accomplished this semester. Don't miss it!"
                    />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </header>

      <section className="section" id="about">
        <Container>
          <h2>About</h2>
          <p>
            We’re a student-led club that teaches programming through hands-on projects, mentorship, and inclusive
            events. All skill levels and majors are welcome!
          </p>
        </Container>
      </section>

      <section className="section" id="why-join">
        <Container>
          <h2>Why Join</h2>
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
                  <Card.Title>Build your Resume</Card.Title>
                  <Card.Text>
                    Add your Girls Who Code experience to your resume and stand out to employers!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Join A Community</Card.Title>
                  <Card.Text>
                    Make friends in your classes, find study partners, and connect with community and career resources.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section" id="programs">
        <Container>
          <h2>Programs & Activities</h2>
          <Row>
            <Col md={6} className="mb-3">
              <Program
                title="Craft Nights"
                description="Chill crafting sessions where members socialize and work on small crafts."
                details="Materials are provided. Example crafts include friendship bracelets, paintings, and more. Craft nights are a great way to meet new people and unwind after a busy week."
              />
            </Col>
            <Col md={6} className="mb-3">
              <Program
                title="Coding Workshops"
                description="Hands-on workshops covering intro to web development, Python, Git, and more."
                details="Workshops are beginner-friendly and designed to help you build practical skills. No prior experience required!"
              />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Program
                title="Movie Nights"
                description="Watch movies together and socialize with your fellow members."
                details="Join us for fun evenings of movie watching and conversation! Members can suggest movies and we vote on what to watch. Snacks provided!"
              />
            </Col>
            <Col md={6} className="mb-3">
              <Program
                title="Course Selection Workshops"
                description="Get help choosing the right courses for your academic and career goals."
                details="Our course selection workshops provide guidance on navigating the curriculum and making informed decisions about your academic path. We share our own experiences and tips to help you succeed in your studies and prepare for your future career."
              />
            </Col>
          </Row>
          <h3>... And More!</h3>
        </Container>
      </section>

      <section className="section" id="rsvp">
        <Container>
          <h2>RSVP / Interest Form</h2>
          <RsvpForm />
        </Container>
      </section>

      <SiteFooter />
    </div>
  )
}
