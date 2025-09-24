import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import testimonials from "./testimonialsData.js";

export default function Testimonials() {
  return (
    <section className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4 fw-bold">What Our Customers Say</h2>
        <Row>
          {testimonials.map((t) => (
            <Col md={4} sm={6} xs={12} key={t.id} className="mb-4">
              <Card className="shadow-sm h-100 text-center border-0">
                <Card.Body>
                  <span style={{ fontSize: "2rem" }}>{t.emoji}</span>
                  <Card.Text className="mt-3">“{t.feedback}”</Card.Text>
                  <h6 className="fw-bold mt-3">{t.name}</h6>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
