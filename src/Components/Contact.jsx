
import "./Contact.css";
function Contact() {
  return (
    <div className="container-fluid">
      <div className="conclusion">
        <h1>Conclusion</h1>

        <p>
          Thank you for taking the time to view my portfolio. As a motivated and
          enthusiastic fresher, I am eager to contribute to a dynamic team and
          further develop my skills. I am looking forward to discussing how my
          background and skills can benefit your company. Please feel free to
          reach out to me using the contact information below.
        </p>
      </div>
      <div className="row contact">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <i className="fa-solid fa-mobile-screen-button"></i>
          <h2>Call me at</h2>
          <a href="tel:+91 8056310810" target="_blank">
            8056310810
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <i className="fa-brands fa-whatsapp"></i>
          <h2>Chat with me</h2>

          <a href="https://wa.me/918056310810" target="_blank">
            <button className="btn btn-success">Chat</button>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <i className="fa-regular fa-envelope"></i>
          <h2>Send mail to</h2>
          <a href="mailto:dhilipan1411@gmail.com" target="_blank">
            dhilipan1411@gmail.com
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <i className="fa-solid fa-location-dot"></i>
          <h2>Meet me at</h2>
          <p>33/10 annai indra nagar</p>
          <p>kanavillaku</p>
          <p>Theni-625531</p>
          <a href="https://maps.app.goo.gl/J3tdUKiSTNAEVvVz8" target="_blank">
            View on map
          </a>
        </div>
      </div>
      <div className="declaration">
        <h2>Declaration</h2>
        <p>
          I hereby declare that the information provided in my portfolio is true
          and accurate to the best of my knowledge and belief.
        </p>
      </div>
      <footer className="bg-dark text-white text-center py-3 ">
        <h2>Thank You</h2>
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
            <a href="https://www.instagram.com/_avg_thor/" target="_blank">
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

export default Contact;
