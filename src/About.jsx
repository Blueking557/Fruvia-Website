import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h2 className="mb-4">About Fruvia 🍊</h2>
            <p>
              Fruvia is a company passionate about bringing you the finest natural
              fruit juices. We specialize in producing healthy, refreshing, and
              delicious juices that add a special touch to your events – birthdays,
              weddings, and social gatherings.
            </p>
            <p>
              With a commitment to quality and freshness, Fruvia has become the
              trusted choice for bulk juice supplies at celebrations. Let us make
              your event memorable with our natural blends.
            </p>
            <Button variant="warning" href="#contact">
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
