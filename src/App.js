import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/css/bootstrap.css";
import "./assets/css/theme.css";
import "./assets/css/maicons.css";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import News from "./news";
import Services from "./services";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/News" element={<News />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
