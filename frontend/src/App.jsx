import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import AppNavbar from "./components/layout/AppNavbar";
import Home from "./pages/Home";
import Interview from "./pages/Interview";

function App() {
  return (
    <Router>
      <AppNavbar />

      <Container fluid className="px-0">
        <Container className="py-3 py-md-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/interview" element={<Interview />} />
          </Routes>
        </Container>
      </Container>
    </Router>
  );
}

export default App;
