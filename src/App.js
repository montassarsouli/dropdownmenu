import React from "react";
import { Navbar, Nav, Container, Card } from "react-bootstrap";

const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">My React App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container className="mt-3">
          <h1>Welcome to My React App</h1>
          <div className="d-flex justify-content-between mt-3">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>This is the content of Card 1.</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>This is the content of Card 2.</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>This is the content of Card 3.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default App;
