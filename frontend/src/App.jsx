import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/layout/AppNavbar";
import Home from "./pages/Home";
import Interview from "./pages/Interview";

function App() {
  return (
    <Router>
      <AppNavbar />
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interview" element={<Interview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
