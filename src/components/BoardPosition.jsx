import React from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap'

export default function BoardPosition({ title, summary, responsibilities = [], timeCommitment, deadline, applyLink }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        {summary && <Card.Text>{summary}</Card.Text>}

        {responsibilities.length > 0 && (
          <>
            <h6>Responsibilities</h6>
            <ListGroup variant="flush" className="mb-2">
              {responsibilities.map((r, i) => (
                <ListGroup.Item key={i}>{r}</ListGroup.Item>
              ))}
            </ListGroup>
          </>
        )}

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <small className="text-muted">{timeCommitment ? `Time: ${timeCommitment}` : ''}</small>
          <div>
            {deadline && <small className="text-muted me-3">Apply by {deadline}</small>}
            {applyLink ? (
              <Button href={applyLink} variant="primary" size="sm">Apply</Button>
            ) : (
              <Button variant="outline-primary" size="sm" disabled>Apply</Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
