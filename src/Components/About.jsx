import me from "../assets/about.jpeg";
import edu from "../assets/edu.png";
import "./About.css";

function About() {
  return (
    <div className="container">
      {/* ABOUT */}
      <section className="row about align-items-center">
        <div className="col-lg-4 col-md-5 col-sm-12 profile_pic text-center mb-4 mb-lg-0">
          <img src={me} alt="profile" className="img-fluid shadow" />
        </div>

        <div className="col-lg-8 col-md-7 col-sm-12 para">
          <h1>So... Who am I?</h1>

          <p>
            I&apos;m a passionate and dedicated web developer, specializing in
            creating responsive, user-friendly websites and applications. With a
            strong foundation in HTML, CSS, and JavaScript, I enjoy transforming
            ideas into digital experiences that are not only functional but also
            visually appealing.
            <br />
            <br />
            My journey in web development has been driven by a love for
            problem-solving and continuous learning. When I&apos;m not coding, I
            explore new technologies and improve my skills.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="row edu align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12 edu-det order-lg-1 order-2">
          <h1>What I&apos;ve done?</h1>

          <p>
            Hello! I&apos;m Dhilipan, a web developer with a strong foundation
            in IT.
            <br />
            <br />
            I completed my schooling at Nadar Saraswathi Higher Secondary
            School, Theni with 64% (10th) and 55% (12th).
            <br />
            <br />I pursued B.Sc Information Technology at Hajee Karutha Rowther
            Howdia College, Uthamapalayam and graduated with 60%.
          </p>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 logo text-center order-lg-2 order-1 mb-4 mb-lg-0">
          <img src={edu} alt="education" className="img-fluid shadow" />
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="container certificates">
        <h1 className="text-center my-4">Now, What I Have?</h1>

        <div className="row">
          {/* CARD 1 */}
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <div className="card-box">
              <div>
                <h6>🎓 Course</h6>
                <h6 className="fw-bold">MERN Stack Development</h6>
                <p className="text-muted">Edureka Learning Center</p>
                <p>
                  Full stack course covering HTML, CSS, JS, React, Node & DB.
                </p>
              </div>

              <a
                href="https://drive.google.com/file/d/1T0ih3De6xsbwJi7QwViR3aL2CuLIU-Nm/view"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success btn-sm"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <div className="card-box">
              <div>
                <h6>💼 Internship</h6>
                <h6 className="fw-bold">Mern Stack Developer</h6>
                <p className="text-muted">Edureka</p>
                <p>1-month internship with real-time projects.</p>
              </div>

              <a
                href="https://drive.google.com/file/d/1SzN_dRtUXNZ_3TqgsRP00nKIGQj2Ts7R/view"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success btn-sm"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <div className="card-box">
              <div>
                <h6>💼 Experience</h6>
                <p>
                  <strong>Java Full Stack Intern</strong>
                </p>
                <p className="text-muted">Softlets Pvt Ltd</p>
                <p>June 2024 – June 2025</p>
                <p>Worked on APIs, React integration & performance.</p>
              </div>

              <a
                href="https://drive.google.com/file/d/1F0CMVT09pLMOf52GSt9QQ-Hemfo6YB_p/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success btn-sm"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <div className="card-box">
              <div>
                <h6>🎓 Course</h6>
                <p>
                  <strong>Java Full Stack</strong>
                </p>
                <p className="text-muted">SLA Institute</p>
                <p>Java, JSP, Servlets, MySQL</p>
              </div>

              <a
                href="https://drive.google.com/file/d/1RVxXfnuff2fuhTW4eM4VsuFRh5ZneSez/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success btn-sm"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3">
        <p>
          <a href="/Projects" className="text-white">
            Learn More
          </a>{" "}
          about my project.
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

        <p>&copy; 2024 Dhilipan</p>
      </footer>
    </div>
  );
}

export default About;
