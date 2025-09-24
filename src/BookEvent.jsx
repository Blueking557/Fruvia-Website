import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export default function BookEvent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "23481042640"; 
    const text = `Hello Fruvia! 🍹\n\nMy name is ${formData.name}.\nEmail: ${formData.email}\nEvent Type: ${formData.eventType}\nMessage: ${formData.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank"); 
  };

  return (
    <section
     id="book-event"
      className="py-5 text-white"
      style={{
        background: "linear-gradient(135deg, #ff7f50, #ffb347)",
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h2 className="fw-bold mb-4">Book Fruvia for Your Event 🍹</h2>
            <p className="mb-4">
              Hosting a party, wedding, or corporate event? Let Fruvia serve
              your guests the freshest juices!
            </p>

            <Form onSubmit={handleSubmit}>
              <Row className="g-2">
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={12}>
                  <Form.Control
                    type="text"
                    name="eventType"
                    placeholder="Event Type (Wedding, Birthday, Corporate...)"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={12}>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    placeholder="Tell us about your event..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <Button
                variant="dark"
                type="submit"
                className="mt-3 px-4 py-2 rounded-pill"
              >
                Send to WhatsApp
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
