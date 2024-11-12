import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Img3 from "../assets/img/bg_image_3.png";

export default function ServiceContent() {
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: "60px",
      duration: 1000,
      delay: 0,
    });
    ScrollReveal().reveal(".scale-in-center", { scale: 0.85 });
    ScrollReveal().reveal(".slide-in-left", { origin: "left" });
  }, []);

  return (
    <div className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 py-3 slide-in-left">
            <h2 className="title-section">
              We're <span className="marked">ready to</span> Serve you with the
              best
            </h2>
            <div className="divider"></div>
            <p className="mb-5">
              We provide marketing services to startups & small businesses
              looking for a partner for their digital media, design &
              development, lead generation & communication.
            </p>
            <a href="/" className="btn btn-primary">
              More Details
            </a>
            <a href="/" className="btn btn-outline ml-2">
              See pricing
            </a>
          </div>
          <div className="col-lg-6 py-3 scale-in-center">
            <div className="img-place text-center">
              <img src={Img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
