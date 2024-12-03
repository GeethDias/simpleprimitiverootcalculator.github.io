import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card, Spinner } from 'react-bootstrap';
import AboutPrimitive from './components/aboutPrimitive';
import UsesOfPrimitives from './components/usesofPrimitives';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [prime, setPrime] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false); 


  const isPrimitiveRoot = (root, p) => {
    const seen = new Set();
    let value = 1;
    for (let i = 0; i < p - 1; i++) {
      value = (value * root) % p;
      if (seen.has(value)) return false;
      seen.add(value);
    }
    return seen.size === p - 1;
  };

  const calculatePrimitiveRoots = () => {
    const p = parseInt(prime, 10);
    if (isNaN(p) || p < 2 || !isPrime(p)) {
      alert('Please enter a valid prime number.');
      return;
    }

    setLoading(true); //To start the loading 
    setTimeout(() => {
      const roots = [];
      for (let i = 1; i < p; i++) {
        if (isPrimitiveRoot(i, p)) roots.push(i);
      }
      setResult(roots);
      setLoading(false); //To stop the loading circle
    }, 2000); // Simulate delay for better UX
  };

  //check if the entered values is prime or not
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <Container fluid className="App">
      <Row className="text-center my-4">
        <Col>
          <h1>Primitive Root Calculator</h1>
          <br></br>
          <p>
  A primitive root is an important concept in number theory and cryptography, particularly in algorithms like Diffie-Hellman Key Exchange. 
  This calculator helps you find all the primitive roots of a given prime number. By entering a valid prime number, you can determine the 
  set of integers that generate all possible remainders modulo that prime, which can be pivotal in secure communication and encryption systems.
</p>
        </Col>
      </Row>

      <Row className="justify-content-center my-3">
        <Col xs={12} md={6}>
          <Card className="p-4">
            <Card.Body>
              <Card.Title>Enter a Prime Number</Card.Title>
              <Form>
                <Form.Group controlId="primeInput">
                  <Form.Control
                    type="text"
                    value={prime}
                    onChange={(e) => setPrime(e.target.value)}
                    placeholder="Enter a prime number"
                  />
                </Form.Group>
                <Button className="mt-3" onClick={calculatePrimitiveRoots} variant="primary">
                  Calculate
                </Button>
              </Form>
              {loading && (
                <div className="text-center mt-3">
                  {/*spinner in action */}
                  <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              )}
              {!loading && result.length > 0 && (
                <Alert variant="success" className="mt-3">
                  <h4>Primitive Roots:</h4>
                  <p>{result.join(', ')}</p>
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
        {/*Get contents from AboutPrimitive component*/}
          <AboutPrimitive />
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
        {/*Get contents from UsesofPrimitives*/}
          <UsesOfPrimitives />
        </Col>
      </Row>

      <Footer />
    </Container>
  );
}

export default App;
