import '../App.css'
import SiteFooter from '../components/SiteFooter'
import Member from '../components/Member'
import { Container, Row, Col } from 'react-bootstrap'

export default function BoardPage() {
  const members = [
    {
      name: 'Sidney Heberlein',
      role: 'Vice President',
      major: 'Computer Science, Data Science',
      year: 'Senior',
      bio: 'Assists with event planning, member outreach, and club operations. Passionate about making tech accessible to all.',
    }
  ]

  return (
    <div className="min-vh-100 d-flex flex-column">
      <main className="flex-grow-1">
        <section className="section" id="board">
          <Container>
            <h2>Board Members</h2>
            <Row>
              {members.map((m) => (
                <Col md={6} lg={4} className="mb-3" key={m.name}>
                  <Member {...m} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}