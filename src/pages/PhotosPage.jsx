import '../App.css'
import Gallery from '../components/Gallery'
import SiteFooter from '../components/SiteFooter'
import photo1 from '../images/photo1.jpg'
import photo2 from '../images/photo2.jpg'
import photo3 from '../images/photo3.jpeg'
import photo4 from '../images/photo4.jpg'
import photo5 from '../images/photo5.JPG'
import photo6 from '../images/photo6.jpg'
import photo7 from '../images/photo7.jpg'
import photo8 from '../images/photo8.jpg'
import { Container } from 'react-bootstrap'

const photos = [
  { src: photo1, alt: 'Valentine Cards', caption: 'Valentine\'s Cards' },
  { src: photo2, alt: 'Halloween Crafts', caption: 'Halloween Crafts' },
  { src: photo3, alt: '2026 Board Members', caption: '2026 Board Members' },
  { src: photo4, alt: 'Friendship Bracelets', caption: 'Friendship Bracelet Making' },
  { src: photo5, alt: 'Halloween Board Members', caption: 'Halloween Board Member Crafts' },
  { src: photo6, alt: 'HTML/CSS Workshop', caption: 'HTML/CSS Workshop' },
  { src: photo7, alt: 'Glee Watch Party', caption: 'Glee Watch Party' },
  { src: photo8, alt: 'CSS Tutorial', caption: 'CSS Tutorial' }
]

export default function PhotosPage() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <main className="flex-grow-1">
        <section className="section" id="photos">
          <Container>
            <h2>Past Events Photos</h2>
            <p>Browse photos from recent club activities and socials.</p>
            <Gallery images={photos} />
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
