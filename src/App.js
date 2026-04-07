import React from "react";
import { Navbar, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">My First React App</Navbar.Brand>
          </Container>
        </Navbar>

        {/* Heading */}
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>
          Welcome to React-Bootstrap!
        </h1>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card One</Card.Title>
              <Card.Text>This is the first card.</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Two</Card.Title>
              <Card.Text>This is the second card.</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Three</Card.Title>
              <Card.Text>This is the third card.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
