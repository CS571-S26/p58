import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import SiteFooter from '../components/SiteFooter'
import side1 from '../images/gwc_side_image.png'
import side2 from '../images/gwc_side_2.jpeg'
import side3 from '../images/gwc_side_3.png'
import side4 from '../images/gwc_side_4.jpg'
import side5 from '../images/gwc_side_5.jpg'

// Replace these with your external form URLs
const SUGGEST_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeAAEk2apc3zl8IvCtQmlEV8ihM7VQH6pMHHyR66QNBNuSljw/viewform'
const JOIN_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScT_YtbO2cOihaittzyO2ZloGTizjljeXIz_CMk0FLjKQspVg/viewform?usp=dialog'
const FEEDBACK_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeyWhDzi1KnUiWb9isMXr1VbATkb0MzeI9ydzThof2iW-t5nw/viewform?usp=dialog'

export default function FormsPage() {
  return (
    <div>
      <section className="section">
        <Container>
          <h2>Forms</h2>
          <p>
            Use these links to open external forms for suggesting events, applying to join the board, or sending general feedback.
          </p>

          <Row>
            <Col md={6} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Suggest an Event</Card.Title>
                  <Card.Text>Have an idea for an event? Use our external suggestion form to submit details.</Card.Text>
                  <Button
                    href={SUGGEST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    disabled={SUGGEST_URL === '#'}
                  >
                    Open suggestion form
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Join the Board</Card.Title>
                  <Card.Text>Interested in a board role? Fill out the application form or learn more on the board positions page.</Card.Text>
                  <Button
                    href={JOIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    disabled={JOIN_URL === '#'}
                  >
                    Open application form
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={12} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>General Feedback</Card.Title>
                  <Card.Text>Send us feedback about the club, website, or events via this external form.</Card.Text>
                  <Button
                    href={FEEDBACK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    disabled={FEEDBACK_URL === '#'}
                  >
                    Open feedback form
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          {/* Decorative stacked images for large screens to fill bottom whitespace */}
          <div className="forms-side d-none d-lg-flex align-items-center justify-content-center mt-4">
            <img src={side1} alt="" className="forms-side-img" />
            <img src={side2} alt="" className="forms-side-img" />
            <img src={side4} alt="" className="forms-side-img" />
            <img src={side5} alt="" className="forms-side-img" />
          </div>
        </Container>
      </section>
      <SiteFooter/>
    </div>
  )
}
