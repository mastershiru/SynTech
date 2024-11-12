import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import InfoModal from "./components/InfoModal";
import VideoModal from "./components/VideoModal";
import ScrollReveal from "scrollreveal";
import BacktoTop from "./components/back.to.Top.btn";
import ContactSection from "./components/contactSection";
import Img1 from "./assets/img/bg_image_1.png";
import Img2 from "./assets/img/bg_image_2.png";
import Img3 from "./assets/img/testi_image.png";
import icon_pattern from "./assets/img/icon_pattern.svg";

function CustomLink({ to, children }) {
  const location = useLocation();

  const isActive =
    (to === "/home" &&
      (location.pathname === "/" || location.pathname === "/home")) ||
    location.pathname === to;

  return (
    <li className={`nav-item ${isActive ? "active" : ""}`}>
      <Link className="nav-link" to={to}>
        {children}
      </Link>
    </li>
  );
}

//animation
export default function Home() {
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: "60px",
      duration: 1000,
      delay: 0,
    });
    ScrollReveal().reveal(".fade-in-up", { origin: "bottom" });
    ScrollReveal().reveal(".scale-in-center", { scale: 0.85 });
    ScrollReveal().reveal(".slide-in-right", { origin: "right" });
    ScrollReveal().reveal(".slide-in-right", { origin: "left" });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [showMoreInfoModal, setShowMoreInfoModal] = useState(false); //more info modal visibility
  const handleShowMoreInfo = () => setShowMoreInfoModal(true); //open the modal
  const handleCloseMoreInfo = () => setShowMoreInfoModal(false); //close the modal

  const [showVideoModal, setShowVideoModal] = useState(false); //watch video modal visibility
  const handleVideoModalShow = () => setShowVideoModal(true); //open the modal
  const handleVideoModalClose = () => setShowVideoModal(false); //close the modal

  return (
    <>
      <BacktoTop />
      <nav
        className={`navbar navbar-expand-lg navbar-light navbar-float ${
          showMoreInfoModal || showVideoModal ? "navbar-dimmed" : ""
        }`}
      >
        <div className="container">
          <Link to="/home" className="navbar-brand">
            Syn<span className="text-primary">Tech.</span>
          </Link>

          <button
            className="navbar-toggler"
            onClick={toggleNavbar}
            aria-controls="navbarContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`navbar-collapse collapse ${isOpen ? "show" : ""}`}
            id="navbarContent"
          >
            <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
              <CustomLink to="/home">Home</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/services">Services</CustomLink>
              <CustomLink to="/news">News</CustomLink>
              <CustomLink to="/contact">Contact</CustomLink>
            </ul>
          </div>
        </div>
      </nav>
      {/* nav end */}

      {/* header start */}
      <header>
        <div className="page-banner home-banner">
          <div className="container h-100" style={{ marginTop: "30px" }}>
            <div className="row align-items-center h-100">
              <div className="col-lg-6 py-3 fade-in-up">
                <h1 className="mb-4">
                  Technology as catalyst for transformative change
                </h1>
                <p className="text-lg mb-5">
                  Synergy Technology Solutions is dedicated to building
                  innovative apps that empower organizations to reach their full
                  potential and thrive in a dynamic world. By combining
                  cutting-edge technology with a deep understanding of your
                  business goals, we create solutions that drive growth,
                  optimize operations, and build a sustainable future.
                </p>

                {/* Modal more info */}
                <button
                  className="btn btn-outline border text-secondary"
                  onClick={handleShowMoreInfo}
                >
                  More Info
                </button>

                <InfoModal
                  show={showMoreInfoModal}
                  handleClose={handleCloseMoreInfo}
                />

                {/* Modal watch  video */}
                <button
                  className="btn btn-primary btn-split ml-2 "
                  onClick={handleVideoModalShow}
                >
                  Watch Video{" "}
                  <div className="fab">
                    <span className="mai-play"></span>
                  </div>
                </button>

                {/* Video Modal Component */}
                <VideoModal
                  show={showVideoModal}
                  handleClose={handleVideoModalClose}
                  videoUrl="https://www.youtube.com/embed/VIDEO_ID" // Replace with your video URL
                />
              </div>
              <div className="col-lg-6 py-3 scale-in-center">
                <div className="img-place">
                  <img src={Img1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* header end */}
      {/* start main */}
      <main>
        <div className="page-section features">
          <div className="container">
            <div className="row justify-content-center">
              {[
                {
                  title: "Provide apps for the modern customers",
                  description:
                    "Responsive apps. Communication tools with AI. Mobile applications.",
                },
                {
                  title: "Complete solutions for educational institutions",
                  description:
                    "Comprehensive school management and information system.",
                },
                {
                  title: "Create IT solutions for modern organizations",
                  description:
                    "Efficiency, effectiveness, convenience, lean organizations.",
                },
              ].map((feature, index) => (
                <div key={index} className="col-md-6 col-lg-4 py-3 fade-in-up">
                  <div className="d-flex flex-row">
                    <div className="img-fluid mr-3">
                      <img src={icon_pattern} alt="" />
                    </div>
                    <div>
                      <h5>{feature.title}</h5>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="page-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 py-3 scale-in-center">
                <div className="img-place text-center">
                  <img src={Img2} alt="" />
                </div>
              </div>

              <div className="col-lg-6 py-3 slide-in-right">
                <h2 className="title-section">
                  We're <span className="marked">Dynamic</span> Team of Creative
                  People
                </h2>
                <div className="divider"></div>
                <p>
                  We provide marketing services to startups & small business
                  looking for a partner for their digital media, design & dev
                  lead generation & communication.
                </p>
                <div className="img-place mb-3">
                  <img src={Img3} alt="" />
                </div>
                <a href="/" className="btn btn-primary">
                  More Details
                </a>
                <a href="/" className="btn btn-outline border ml-2">
                  Success Stories
                </a>
              </div>
            </div>
          </div>
        </div>
        <ContactSection />
      </main>
      {/* end main */}
      {/* footer */}
      {/* <Footer /> */}
    </>
  );
}
