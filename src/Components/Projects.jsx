import avatar from "../assets/zomato.jpeg";
import tech from "../assets/tech.avif";
import home from "../assets/prologin.png";
import donlogin from "../assets/donlogin.png";
import dondash from "../assets/dondash.png";
import addfood from "../assets/addfood.png";
import reclogin from "../assets/reclogin.png";
import recdash from "../assets/recdash.png";
import "./Projects.css";

function Projects() {
  return (
    <div className="container">
      {/* PROJECT OVERVIEW */}
      <div className="row project">
        <div className="col-lg-6 col-md-12 col-sm-12 leftside">
          <h1>Project Name : Smart Food Donation System</h1>

          <p>
            <b>Overview :</b> Developed a web-based Smart Food Donation
            Management System to connect food donors with receivers and reduce
            food wastage.
            <br />
            <br />
            The system allows donors to post surplus food reclogin and enables
            receivers to request donations. Donors can manage food posts with
            create, update, and delete operations.
            <br />
            <br />
            Admins/receivers can accept or reject requests. Implemented a
            dynamic dashboard to track donation status such as{" "}
            <b>Accepted, Pending, and Rejected</b> in real time.
          </p>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 rightside">
          <img src={avatar} alt="project" />
        </div>
      </div>

      {/* TECH STACK */}
      <div className="row tech">
        <div className="col-lg-6 col-md-12 col-sm-12 tech-stack">
          <h2>Technical Stack :</h2>

          <dl>
            <dt>
              <u>Front End</u>
            </dt>
            <dd>
              <b>HTML & CSS :</b> Page structure, styling, layout, and
              responsive UI design.
              <br />
              <b>JSP :</b> Dynamic page rendering and server-side integration.
            </dd>

            <dt>
              <u>Back End</u>
            </dt>
            <dd>
              <b>Java :</b> Core backend logic and business processing.
              <br />
              <b>JSP & Servlets :</b> Handling client requests and responses.
              <br />
              <b>JDBC :</b> Database connectivity and CRUD operations.
            </dd>

            <dt>
              <u>Database</u>
            </dt>
            <dd>
              <b>MySQL :</b> Relational database for storing food donations,
              users, and request reclogin.
            </dd>

            <dt>
              <u>Server & Tools</u>
            </dt>
            <dd>
              <b>Apache Tomcat :</b> Application server for deployment.
              <br />
              <b>NetBeans :</b> Development environment.
            </dd>
          </dl>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 tec-image">
          <img src={tech} className="tech-img" alt="tech" />
        </div>
      </div>

      {/* SCREENSHOTS */}
      <div className="row screenshots">
        <h1>Screenshots</h1>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <img src={dondash} alt="dondash" />
          <img src={addfood} alt="addfood" />
          <img src={donlogin} alt="search" />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <img src={home} alt="home" />
          <img src={reclogin} alt="reclogin" />
          <img src={recdash} alt="recdash" />
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3">
        <p>
          <a href="/contact" className="text-white">
            If you want contact me
          </a>{" "}
        </p>

        <ul className="contact-icons">
          <li>
            <a
              href="https://www.linkedin.com/in/dhilipan-n-69a552317/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_mad._.dhilipan/"
              target="_blank"
            >
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Dhilipan1411/" target="_blank">
              <i className="fa-brands fa-square-github"></i>
            </a>
          </li>
          <li>
            <a href="mailto:dhilipan1411@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>

        <p>&copy; 2024 Dhilipan. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Projects;
