import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Member({ name, role, major, year, bio, fact, image }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card className="h-100 shadow-sm">
      {image && (
        <Card.Img
          variant="top"
          src={image}
          alt={`${name} headshot`}
          className="member-img"
        />
      )}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {role && <Card.Subtitle className="mb-2 text-muted">{role}</Card.Subtitle>}
        <Card.Text className="mb-1"><strong>Major:</strong> {major}</Card.Text>
        <Card.Text className="mb-1"><strong>Year:</strong> {year}</Card.Text>

        {expanded && (
          <>
            <Card.Text>{bio}</Card.Text>
            <Card.Text>Fun Fact: {fact}</Card.Text>
          </>
        )}

        <Button
          variant="link"
          onClick={() => setExpanded((s) => !s)}
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : 'Show more'}
        </Button>
      </Card.Body>
    </Card>
  )
}