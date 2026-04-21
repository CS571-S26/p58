import { useState } from 'react'
import { Card, Button, Collapse } from 'react-bootstrap'

export default function Program(props) {
  const [open, setOpen] = useState(false)

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title as="h3">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button
          variant="link"
          onClick={() => setOpen(o => !o)}
          aria-controls={`program-details-${props.title}`}
          aria-expanded={open}
        >
          {open ? 'Hide' : 'Learn more'}
        </Button>

        <Collapse in={open}>
          <div id={`program-details-${props.title}`} className="mt-3">
            <Card.Text>{props.details}</Card.Text>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  )
}
