import React, { useState, useEffect } from "react";
import "../assets/css/theme.css";

export default function BacktoTopp() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className="back-to-top"
      style={{ visibility: isVisible ? "visible" : "hidden" }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    ></div>
  );
}
