import React, { useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./product.css"
import { CartContext } from "./CartContext";
import mango from "./assets/mango.jpg";
import Orange1 from "./assets/Orange1.jpg";
import Berries from "./assets/Berries.jpg";

const products = [
  {
    id: 1,
    name: "Smoothie",
    price: 20,
    image: mango,
  },
  {
    id: 2,
    name: "Orange Squash",
    price: 15,
    image: Orange1,
  },
  {
    id: 3,
    name: "Berries Smoothie",
    price: 20,
    image: Berries,
  },
];

export default function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    <Row id="products" className="m-5">
      {products.map((product) => (
        <Col key={product.id} md={4} className="mb-4">
          <Card className="h-100 shadow-sm product-card">
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.name}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Button
                variant="success"
                className ="btn-deep-yellow"
                onClick={() => addToCart(product)}
              >
                Add to Cart 🛒
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

