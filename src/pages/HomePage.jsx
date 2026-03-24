import '../App.css'
import WhyCard from '../components/WhyCard'
import Program from '../components/Program'
import Event from '../components/Event'
import SiteFooter from '../components/SiteFooter'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function HomePage() {
  return (
    <div>
      <header className="hero bg-light py-5 mb-4">
      <Container>
        <h1 className="display-5">Girls Who Code At UW-Madison</h1>
        <p className="lead">Join a supportive community of your female peers in technology. Sign up for our email list below!</p>
        <div>
          <Button
            as="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLScHdkVhut9_u-xPDwN47lg9f5wrcHeEhpip3D2OJIlYLVceRA/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="me-2"
          >
            Sign up!
          </Button>
        </div>
      </Container>
    </header>
      <section className="section" id="about">
      <Container>
        <h2>About</h2>
        <p>We’re a student-led club that teaches programming through hands-on projects, mentorship, and inclusive events. All skill levels and majors are welcome!</p>
      </Container>
    </section>
      <section className="section" id="why-join">
            <Container>
              <h2>Why Join</h2>
              <Row>
                <Col md={4} className="mb-3">
                  <WhyCard
                    title="Learn Practical Skills"
                    text="Workshops cover web dev, Python, Git, and more."
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <WhyCard
                    title="Build your Resume"
                    text="Add your Girls Who Code experience to your resume and stand out to employers!"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <WhyCard
                    title="Join A Community"
                    text="Make friends in your classes, find study partners, and connect with community and career resources."
                  />
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
                title="Weekly Workshops"
                description="Hands-on lessons covering web dev, Python, Git, and other fundamentals."
                details="Workshops meet every Wednesday. Each session includes a short lesson, hands-on exercises, and time for Q&A. Materials and example code are shared after each workshop."
              />
            </Col>
            <Col md={6} className="mb-3">
              <Program
                title="Project Nights"
                description="Collaborative evenings where members build small projects and learn by doing."
                details="Project nights occur twice a month. Members pair up or join small teams to work on portfolio projects; mentors are available for guidance. Projects are showcased at demo nights."
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section" id="events">
        <Container>
          <h2>Upcoming Events</h2>
          <Row>
            <Col md={6} className="mb-3">
              <Event
                title="Intro to HTML & CSS"
                date="Apr 2 • 5:00 PM"
                description="Hands-on workshop for beginners. No experience required."
              />
            </Col>
            <Col md={6} className="mb-3">
              <Event
                title="Project Night: Build a Portfolio"
                date="Apr 9 • 6:00 PM"
                description="Bring your laptop and start a simple portfolio site."
              />
            </Col>
          </Row>
        </Container>
      </section>
      <SiteFooter />
    </div>
  )
}
