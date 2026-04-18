import '../App.css'
import SiteFooter from '../components/SiteFooter'
import Member from '../components/Member'
import trisha from '../images/trisha.png'
import sidney from '../images/sidney.png'
import justina from '../images/justina.png'
import yen from '../images/yen.png'
import angela from '../images/angela.png'
import { Container, Row, Col } from 'react-bootstrap'

export default function BoardPage() {
  const members = [
    {
      name: 'Trisha Rajesh',
      role: 'President',
      major: 'Computer Science, Psychology',
      year: 'Senior',
      bio: 'I love Girls Who Code because it’s a great way to connect with other women in STEM!',
      fact: 'I can play the flute!',
      image: trisha
    },
    {
      name: 'Sidney Heberlein',
      role: 'Vice President',
      major: 'Computer Science, Data Science',
      year: 'Senior',
      bio: 'I love hearing about everyone’s experiences with classes & professors',
      fact: 'I am learning American Sign Language!',
      image: sidney
    },
    {
      name: 'Justina Rhee',
      role: 'Digital Media Coordinator',
      major: 'Computer Science, Data Science',
      year: 'Junior',
      bio: 'It’s a great place to find fellow women in CS while learning new things and gaining resources!',
      fact: 'I like to crochet and read!',
      image: justina
    },
    {
      name: 'Yen Ly',
      role: 'Event Planner',
      major: 'Data Science, Economics',
      year: 'Junior',
      bio: 'Girls who code is a great way to meet and connect with other girls who share an interest in coding',
      fact: 'I love to paddle board!',
      image: yen
    },
    {
      name: 'Angela Wohletz',
      role: 'Secretary',
      major: 'Computer Science, Graphic Design',
      year: 'Sophomore',
      bio: 'I love getting to know other girls in CS and connecting with them outside of class!',
      fact: 'I love to read and hike!',
      image: angela
    }
  ]

  return (
    <div className="min-vh-100 d-flex flex-column">
      <main className="flex-grow-1">
        <section className="section" id="board">
          <Container>
            <h2>Board Members</h2>
            <p>Meet our dedicated board members!</p>
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