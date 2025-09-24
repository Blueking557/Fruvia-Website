import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Hero.css";

export default function Hero() {
  return (
    
    <section id="home" className="hero-section d-flex align-items-center text-center text-light">
      <Container>
        <h1 className="fw-bold display-3">🍹 Fruvia</h1>
        <p className="lead mb-4">
          Fresh • Natural • Delicious — Perfect for Every Occasion
        </p>
        <div>
          <Button variant="warning" size="lg" className="me-3 fw-bold text-dark">
            Shop Now
          </Button>
          <Button href="#book-event" variant="outline-light" size="lg" className="fw-bold">
            Book Event
          </Button>
        </div>
      </Container>
       {/* ... */}
    </section>
    
  );
}
