import '../App.css'
import Event from '../components/Event'
import SiteFooter from '../components/SiteFooter'
import { Container, Row, Col } from 'react-bootstrap'

export default function EventsPage() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <main className="flex-grow-1">
        <section className="section w-100" id="events">
          <Container>
            <h2>Upcoming Events: Spring 2026</h2>
            <Row>
              <Col md={6} className="mb-3">
                <Event
                  title="Potluck & Movie Social"
                  date="Apr 13 • 7:30 PM"
                  description="Join us for a fun evening of food and movies! Bring a dish to share and enjoy a movie night with your fellow members! Food will be provided."
                />
              </Col>
              <Col md={6} className="mb-3">
                <Event
                  title="Final Meeting of the Semester"
                  date="Apr 27 • 7:30 PM"
                  description="Celebrate the end of the semester with us! We'll have snacks, games, and a recap of all the great things we accomplished this semester. Don't miss it!"
                />
              </Col>
            </Row>
            <h2>Tentative Events: Fall 2026</h2>
            <Row>
              <Col md={6} className="mb-3">
                <Event
                  title="Welcome Back Social"
                  date="Sep 14 • 7:30 PM"
                  description="Kick off the new semester with a social event! Meet new and returning members, enjoy snacks, and learn about all the exciting things planned for the semester."
                />
              </Col>
              <Col md={6} className="mb-3">
                <Event
                  title="Intro to Python Workshop"
                  date="Sep 28 • 7:30 PM"
                  description="New to coding? No problem! Join us for an introductory workshop on Python programming. We'll cover the basics and get you started on your coding journey."
                />
              </Col>
              <Col md={6} className="mb-3">
                <Event
                  title="Guest Speaker"
                  date="Oct 12 • 7:30 PM"
                  description="We're excited to host a guest speaker from the tech industry! Stay tuned for more details on who will be joining us and what they'll be sharing."
                />
              </Col>
              <Col md={6} className="mb-3">
                <Event
                  title="Halloween Social"
                  date="Oct 26 • 7:30 PM"
                  description="Get into the Halloween spirit with us! Join us for a spooky social event with themed snacks, games, and maybe even a costume contest!"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
