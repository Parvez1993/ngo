import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Appbar from "./components/Homepage/Appbar";
import Misison from "./pages/Misison";
import Contactus from "./components/Homepage/Contactus";
import Project from "./pages/Project";
import Footer from "./components/Homepage/Footer";
import Contact from "./pages/Contact";

import "aos/dist/aos.css"; // You can also use <link> for styles
function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Misison />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
