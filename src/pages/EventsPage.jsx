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
                  description="Join us for a fun evening of food and movies! Bring a dish to share and enjoy a movie night with your fellow members."
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
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
