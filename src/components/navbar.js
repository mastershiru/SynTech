import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// CustomLink component to handle navigation and active state
function CustomLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className={`nav-item ${isActive ? "active" : ""}`}>
      <Link
        className="nav-link"
        to={to}
        aria-current={isActive ? "page" : undefined}
      >
        {children}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
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

          {/* <div className="ml-auto">
            <a href="/" className="btn btn-outline rounded-pill">
              Get a Quote
            </a>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [isNavbarFloat, setIsNavbarFloat] = useState(true); // Initially, navbar-float is active

//   const handleClick = (isReset = false) => {
//     if (isReset) {
//       // Remove navbar-float class
//       setIsNavbarFloat(false);
//     } else {
//       setIsNavbarFloat(true);
//     }
//   };
//   return (
//     <nav
//       className={`navbar navbar-expand-lg navbar-light ${
//         isNavbarFloat ? "navbar-float" : ""
//       }`}
//     >
//       <div className="container">
//         <Link
//           to="/home"
//           className="navbar-brand"
//           onClick={() => handleClick(false)}
//         >
//           Syn
//           <span className="text-primary">Tech.</span>
//         </Link>

//         <button
//           className="navbar-toggler"
//           data-toggle="collapse"
//           data-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="navbar-collapse collapse" id="navbarContent">
//           <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
//             <CustomLink to="/home" onClick={() => handleClick(false)}>
//               Home
//             </CustomLink>
//             <CustomLink to="/about" onClick={() => handleClick(true)}>
//               About
//             </CustomLink>
//             <CustomLink to="/services" onClick={() => handleClick(true)}>
//               Services
//             </CustomLink>
//             <CustomLink to="/news" onClick={() => handleClick(true)}>
//               News
//             </CustomLink>
//             <CustomLink to="/contact" onClick={() => handleClick(true)}>
//               Contact
//             </CustomLink>
//           </ul>

//           <div className="ml-auto">
//             <a href="/" className="btn btn-outline rounded-pill">
//               Get a Quote
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// // CustomLink component to handle navigation and active state
// function CustomLink({ to, children, onClick }) {
//   const path = window.location.pathname;

//   return (
//     <li className={path === to ? "nav-item active" : "nav-item"}>
//       <Link className="nav-link" to={to} onClick={onClick}>
//         {children}
//       </Link>
//     </li>
//   );
// }

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// // CustomLink component to handle navigation and active state
// function CustomLink({ to, children }) {
//   const location = useLocation(); // Get the current location

//   // Determine if the link is active based on the current pathname
//   const isActive = location.pathname === to;

//   return (
//     <li className={`nav-item ${isActive ? "active" : ""}`}>
//       <Link className="nav-link" to={to}>
//         {children}
//       </Link>
//     </li>
//   );
// }

// export default function Navbar() {
//   return (
//     <nav class="navbar navbar-expand-lg navbar-light navbar-float">
//       <div className="container">
//         <Link to="/home" className="navbar-brand">
//           Syn<span className="text-primary">Tech.</span>
//         </Link>

//         <button
//           className="navbar-toggler"
//           data-toggle="collapse"
//           data-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="navbar-collapse collapse" id="navbarContent">
//           <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
//             <CustomLink to="/home">Home</CustomLink>
//             <CustomLink to="/about">About</CustomLink>
//             <CustomLink to="/services">Services</CustomLink>
//             <CustomLink to="/news">News</CustomLink>
//             <CustomLink to="/contact">Contact</CustomLink>
//           </ul>

//           <div className="ml-auto">
//             <a href="/" className="btn btn-outline rounded-pill">
//               Get a Quote
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
