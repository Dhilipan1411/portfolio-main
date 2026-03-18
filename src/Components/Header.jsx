import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../assets/logo.png";
function Header() {
  return (
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <img src={logo} width="30" height="30"></img>
    //     </Navbar.Brand>
    //     <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ms-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#about">About Me</Nav.Link>
    //         <Nav.Link href="#project">My Projects</Nav.Link>
    //         <Nav.Link href="#contact">Contact Me</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <nav className="navbar navbar-expand-lg nav">
      <div className="navbar-brand">
        <h4>My Self</h4>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="About">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
