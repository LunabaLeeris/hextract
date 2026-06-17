import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import BackgroundPattern from "./components/BackgroundPattern";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <Router>
      <MantineProvider>
        <BackgroundPattern />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MantineProvider>
    </Router>
  );
}

export default App;

