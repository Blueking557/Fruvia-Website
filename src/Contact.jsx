import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <section id="contact" className="py-5 text-center">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold">Contact Fruvia 📍</h2>
            <p>We’d love to hear from you! Reach us anytime.</p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6} className="mb-4">
            <h5>📞 Phone:</h5>
            <p>+234 8104 2640</p>

            <h5>📧 Email:</h5>
            <p>fruvia@gmail.com</p>

            <h5>🏠 Location:</h5>
            <p>Awka, Nigeria</p>

            <div className="mt-3">
              <Button
                variant="dark"
                href="tel:+23481052640"
                className="me-2"
              >
                Call Now
              </Button>
              <Button
                variant="outline-dark"
                href="mailto:fruvia@gmail.com"
              >
                Send Email
              </Button>
            </div>
          </Col>

          
        </Row>
      </Container>
    </section>
  );
}
