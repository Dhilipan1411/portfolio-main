import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Header from "./Header";
import Home from "./Home";

function Router() {
  return (
    <BrowserRouter>
      <Header /> {/* 👈 always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
