import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";
import { Link } from "react-scroll"; // ✅ Import react-scroll Link
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          {/* Links Section */}
          <Col md={4} className="text-center text-md-start mb-3">
            <h5 className="mb-3">Fruvia</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="home" smooth={true} duration={500} className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="products" smooth={true} duration={500} className="footer-link">
                  Products
                </Link>
              </li>
              <li>
                <Link to="book" smooth={true} duration={500} className="footer-link">
                  Book Event
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>

          {/* Social Media Section */}
          <Col md={4} className="text-center mb-3">
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon facebook">
                <Facebook size={28} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon instagram">
                <Instagram size={28} />
              </a>
              <a href="https://wa.me/2349032239670" target="_blank" rel="noreferrer" className="icon whatsapp">
                <Whatsapp size={28} />
              </a>
            </div>
          </Col>

          {/* About Section */}
          <Col md={4} className="text-center text-md-end mb-3">
            <h5 className="mb-3">About Fruvia</h5>
            <p>
              Fruvia provides 100% natural fruit juices for weddings, birthdays, 
              and all kinds of events. Freshness you can taste, quality you can trust.
            </p>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">© {new Date().getFullYear()} Fruvia. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
