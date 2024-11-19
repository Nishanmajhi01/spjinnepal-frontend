import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Contact Us</h1>
          <p className="text-center">
            We'd love to hear from you. Please reach out with any questions or feedback!
          </p>
        </Col>
      </Row>
      <Row>
        {/* Contact Form */}
        <Col md={6} className="mb-4">
          <h3>Send a Message</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Write your message" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>

        {/* Contact Information */}
        <Col md={6}>
          <h3>Contact Information</h3>
          <ul className="list-unstyled">
            <li>
              <strong>Address:</strong> 123 Main Street, Cityville, Country
            </li>
            <li>
              <strong>Phone:</strong> +123 456 7890
            </li>
            <li>
              <strong>Email:</strong> contact@example.com
            </li>
          </ul>
          <h3 className="mt-4">Follow Us</h3>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
