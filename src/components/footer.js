import React from "react";
import "../assets/css/maicons.css";

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row justify-content-center mb-5">
          {/* DigiGram Section */}
          <div className="col-lg-3 py-3">
            <h3>
              Digi<span className="text-primary">Gram.</span>
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <p>
              <a href="mailto:digigram@mail.com">digigram@mail.com</a>
            </p>
            <p>
              <a href="tel:+00112233445566">+00 1122 3344 5566</a>
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-3 py-3">
            <h5>Quick Links</h5>
            <ul className="footer-menu">
              <li>
                <a href="/">How it works</a>
              </li>
              <li>
                <a href="/">Security</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Resources</a>
              </li>
              <li>
                <a href="/">Report a Bug</a>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div className="col-lg-3 py-3">
            <h5>About Us</h5>
            <ul className="footer-menu">
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Jobs</a>
              </li>
              <li>
                <a href="/">Our Teams</a>
              </li>
              <li>
                <a href="/">Testimonials</a>
              </li>
              <li>
                <a href="/">News & Press</a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="col-lg-3 py-3">
            <h5>Subscribe</h5>
            <form action="#">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your mail.."
              />
            </form>

            <div className="sosmed-button mt-4">
              <a href="/">
                <span className="mai-logo-facebook-f"></span>
              </a>
              <a href="/">
                <span className="mai-logo-twitter"></span>
              </a>
              <a href="/">
                <span className="mai-logo-google"></span>
              </a>
              <a href="/">
                <span className="mai-logo-linkedin"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="row">
          <div className="col-sm-6 py-2">
            <p id="copyright">
              &copy; 2020 <a href="https://macodeid.com/">MACode ID</a>. All
              rights reserved
            </p>
          </div>
          <div className="col-sm-6 py-2 text-right">
            <div className="d-inline-block px-3">
              <a href="/">Privacy</a>
            </div>
            <div className="d-inline-block px-3">
              <a href="/">Contact Us</a>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* .container */}
    </footer>
  );
}
