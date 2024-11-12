import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Features() {
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: "60px",
      duration: 1000,
      delay: 0,
    });
    ScrollReveal().reveal(".fade-in-up", { origin: "bottom" });
  }, []);

  const features = [
    {
      iconClass: "mai-shapes",
      title: "High Performance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.",
    },
    {
      iconClass: "mai-shapes",
      title: "Friendly Prices",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.",
    },
    {
      iconClass: "mai-shapes",
      title: "No time-confusing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.",
    },
  ];

  return (
    <div className="page-section">
      <div className="container">
        <div className="text-center fade-in-up">
          <div className="subhead">Why Choose Us</div>
          <h2 className="title-section">
            Your <span className="marked">Comfort</span> is Our Priority
          </h2>
          <div className="divider mx-auto"></div>
        </div>

        <div className="row mt-5 text-center">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 py-3 fade-in-up">
              <div className="display-3">
                <span className={feature.iconClass}></span>
              </div>
              <h5>{feature.title}</h5>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
