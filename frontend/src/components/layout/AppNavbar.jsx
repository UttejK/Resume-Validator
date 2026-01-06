import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FaFileAlt, FaComments } from "react-icons/fa";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaFileAlt className="me-2" />
          Resume Analyzer
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/interview">
            <FaComments className="me-1" />
            Interview
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
