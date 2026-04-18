import React, { useState, useEffect } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

const STORAGE_KEY = 'gwc_rsvps'

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function RsvpForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [eventChoice, setEventChoice] = useState('General Interest')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')
  const [savedCount, setSavedCount] = useState(0)

  useEffect(() => {
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      setSavedCount(existing.length)
    } catch (e) {
      setSavedCount(0)
    }
  }, [])

  function validate() {
    const e = {}
    if (!name.trim()) e.name = 'Name is required.'
    if (!email.trim()) e.email = 'Email is required.'
    else if (!isValidEmail(email)) e.email = 'Please enter a valid email.'
    else if (!email.endsWith('@wisc.edu')) e.email = 'Please use your @wisc.edu email.'
    return e
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    setSuccess('')
    if (Object.keys(e).length) return

    const entry = {
      name: name.trim(),
      email: email.trim(),
      event: eventChoice,
      message: message.trim(),
      createdAt: new Date().toISOString()
    }

    try {
      const arr = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      arr.push(entry)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr))
      setSavedCount(arr.length)
      setSuccess('Thanks — your response was saved locally.')
      setName('')
      setEmail('')
      setEventChoice('General Interest')
      setMessage('')
      setErrors({})
    } catch (err) {
      setErrors({ submit: 'Could not save response locally.' })
    }
  }

  return (
    <div>
      <p>Fill out this short RSVP / interest form — responses are saved to your browser.</p>

      {success && <Alert variant="success">{success}</Alert>}
      {errors.submit && <Alert variant="danger">{errors.submit}</Alert>}

      <Form onSubmit={handleSubmit} className="mb-3">
        <Form.Group className="mb-2" controlId="rsvpName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            isInvalid={!!errors.name}
            placeholder="Your name"
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2" controlId="rsvpEmail">
          <Form.Label>Wisc Email</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={!!errors.email}
            placeholder="you@wisc.edu"
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2" controlId="rsvpEvent">
          <Form.Label>Event / Interest</Form.Label>
          <Form.Select value={eventChoice} onChange={(e) => setEventChoice(e.target.value)}>
            <option>General Interest</option>
            <option>Craft Nights</option>
            <option>Coding Workshops</option>
            <option>Movie Nights</option>
            <option>Course Selection Workshops</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-2" controlId="rsvpMessage">
          <Form.Label>Message (optional)</Form.Label>
          <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
        </Form.Group>

        <div className="d-flex align-items-center">
          <Button type="submit" variant="primary" className="me-2">Save response</Button>
          <small className="text-muted">Saved responses: {savedCount}</small>
        </div>
      </Form>
    </div>
  )
}
