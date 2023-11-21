
import './App.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://th.bing.com/th/id/OIP.YFg1P8EKHR5H1k_tDIDsKgHaFF?rs=1&pid=ImgDetMain"
        />
        <Card.Body>
          <Card.Title>Karma FS+ D10 E7000 2020</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://th.bing.com/th/id/OIP.OUvWV9uCIzbdWDftRM7LXQHaFP?rs=1&pid=ImgDetMain"
        />
        <Card.Body>
          <Card.Title>BMW G 310 GS</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://mandataire-auto.com/guide/wp-content/uploads/2017/10/audi-occasion-allemagne-768x390.jpg"
        />
        <Card.Body>
          <Card.Title>Audi a3</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
