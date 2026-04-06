import React from 'react'
import { Card } from 'react-bootstrap'

export default function Member({ name, role, major, year, bio, image }) {
  return (
    <Card className="h-100 shadow-sm">
      {image && <Card.Img variant="top" src={image} alt={`${name} headshot`} />}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {role && <Card.Subtitle className="mb-2 text-muted">{role}</Card.Subtitle>}
        <Card.Text className="mb-1"><strong>Major:</strong> {major}</Card.Text>
        <Card.Text className="mb-1"><strong>Year:</strong> {year}</Card.Text>
        <Card.Text>{bio}</Card.Text>
      </Card.Body>
    </Card>
  )
}