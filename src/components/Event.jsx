import { Card, Button } from 'react-bootstrap'

export default function Event(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title as="h2">{props.title}</Card.Title>
        <Card.Subtitle as="h3" className="mb-2 text-muted">{props.date}</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}
