import React, { useState } from 'react'
import { Card, Modal, Container, Row, Col } from 'react-bootstrap'

export default function Gallery({ images = [] }) {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(null)

  function open(i) {
    setActive(i)
    setShow(true)
  }

  function close() {
    setShow(false)
    setActive(null)
  }

  return (
    <Container className="gallery">
      <Row>
        {images.map((img, idx) => (
          <Col md={4} sm={6} xs={12} className="mb-3" key={idx}>
            <Card
              role="button"
              onClick={() => open(idx)}
              className="h-100 shadow-sm"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(idx) } }}
            >
              <Card.Img
                variant="top"
                src={img.src}
                alt={img.alt || `photo-${idx}`}
                className="gallery-img"
              />
              {img.caption && (
                <Card.Body>
                  <Card.Text>{img.caption}</Card.Text>
                </Card.Body>
              )}
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={close} centered size="lg" aria-labelledby="photo-modal-title">
        <Modal.Header closeButton>
          <Modal.Title id="photo-modal-title">{active != null && images[active]?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {active != null && (
            <img
              src={images[active].src}
              alt={images[active].alt || images[active].caption || `Photo ${active + 1}`}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  )
}
