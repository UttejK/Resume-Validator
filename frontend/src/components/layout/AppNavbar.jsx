import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FaFileAlt, FaComments } from "react-icons/fa";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
      <Container>
        {/* Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2"
        >
          <FaFileAlt />
          <span className="fw-semibold">Resume Analyzer</span>
        </Navbar.Brand>

        {/* Mobile toggle */}
        <Navbar.Toggle aria-controls="app-navbar" />

        {/* Links */}
        <Navbar.Collapse id="app-navbar">
          <Nav className="ms-auto text-center text-md-start mt-3 mt-md-0">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/interview"
              className="d-flex align-items-center justify-content-center justify-content-md-start gap-1"
            >
              <FaComments />
              Interview
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
