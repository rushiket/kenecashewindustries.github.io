import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Grade from "./components/Grade";
import About from "./components/About";
import Contact from"./components/Contact";
import HomeScreen from "./components/HomeScreen";
function App() {
  return (
    <Router>
      <Header />
      <Container className="p-0" fluid >
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Grade" element={<Grade />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
