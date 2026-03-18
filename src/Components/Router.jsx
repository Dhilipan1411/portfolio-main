
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Header from "./Header";
import Home from "./Home";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" Component={Header} />
          <Route exact path="/" Component={Home} />
          <Route path="/About" Component={About} />
          <Route path="/Contact" Component={Contact} />
          <Route path="/Projects" Component={Projects} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
