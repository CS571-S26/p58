import '../App.css'
import SiteFooter from '../components/SiteFooter'
import Member from '../components/Member'
import BoardPosition from '../components/BoardPosition'
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

  const positions = [
    {
      title: 'Treasurer',
      summary: 'Manage the chapter budget, buy materials and food, and coordinate reimbursements.',
      responsibilities: [
        'Keep track of purchase history for the club',
        'Manage the GWC bank account',
        'Fill out forms to get funding at the beginning of the semester',
        'Get materials/supplies for events'
      ],
      timeCommitment: '2–4 hours / week',
      deadline: 'April 30',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLScT_YtbO2cOihaittzyO2ZloGTizjljeXIz_CMk0FLjKQspVg/viewform?usp=dialog'
    },
    {
      title: 'Social Media Coordinator',
      summary: 'Manage our social media accounts and promote events to the campus community.',
      responsibilities: [
        'Make bi-weekly Instagram posts for events and respond to Instagram DMs',
        'Manage the Discord and post about events and opportunities',
        'Reach out to potential speakers'
      ],
      timeCommitment: '2-4 hours / week',
      deadline: 'April 30',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLScT_YtbO2cOihaittzyO2ZloGTizjljeXIz_CMk0FLjKQspVg/viewform?usp=dialog'
    },
    {
      title: 'Secretary',
      summary: 'Handle administrative tasks and keep track of meeting notes and attendance.',
      responsibilities: [
        'Create and send out the bi-weekly meeting email',
        'Add new members to the mailing list (after org fair, etc.)',
        'Respond to emails sent to the UW Girls Who Code email'
      ],
      timeCommitment: '2–4 hours / week',
      deadline: 'April 30',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLScT_YtbO2cOihaittzyO2ZloGTizjljeXIz_CMk0FLjKQspVg/viewform?usp=dialog'
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
              <hr />
              <h2 className="mt-4">Open Board Positions</h2>
              <p>We're accepting applications for the following roles for the 2026-2027 school year — click Apply to learn more!</p>
              <Row>
                {positions.map((p) => (
                  <Col md={6} lg={4} className="mb-3" key={p.title}>
                    <BoardPosition {...p} />
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