
import React, { useContext, useState } from "react";
import { Navbar, Nav, Container, Button, Badge, Dropdown } from "react-bootstrap";
import { CartContext } from "./CartContext";

export default function FruviaNavbar() {
  const { cartItems, removeFromCart } = useContext(CartContext); // ✅ include remove
  const [showCart, setShowCart] = useState(false);

  // Total items in cart
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        {/* Brand (Company Name + Emoji instead of logo image) */}
        <Navbar.Brand href="#home" className="fw-bold text-warning">
          🍹 FRUVIA
        </Navbar.Brand>

        {/* Mobile toggle */}
        <Navbar.Toggle aria-controls="fruvia-navbar" />

        <Navbar.Collapse id="fruvia-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

            {/* Cart Dropdown */}
            <Dropdown
              align="end"
              show={showCart}
              onToggle={() => setShowCart(!showCart)}
              className="ms-3"
            >
              <Dropdown.Toggle
                as={Button}
                variant="outline-light"
                className="position-relative"
              >
                <i className="bi bi-cart3"></i> Cart
                <Badge bg="warning" text="dark" pill className="ms-2">
                  {cartCount}
                </Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 280 }}>
                {cartItems.length === 0 ? (
                  <Dropdown.Item>Your cart is empty</Dropdown.Item>
                ) : (
                  cartItems.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      className="d-flex justify-content-between align-items-center"
                    >
                      <span>
                        {item.name} — {item.quantity}
                      </span>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ❌
                      </Button>
                    </Dropdown.Item>
                  ))
                )}
              </Dropdown.Menu>
            </Dropdown>

            {/* Book Event button */}
            <Button variant="warning" className="ms-3 fw-bold text-dark">
              Book Event
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
