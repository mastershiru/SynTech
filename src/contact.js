import React from "react";
import PageBanner from "./components/pageBanner";
import "./assets/css/maicons.css";
import Footer from "./components/footer";
import BacktoTop from "./components/back.to.Top.btn";
import Navbar from "./components/navbar";

import ContactSection from "./components/contactSection";

export default function About() {
  const breadcrumbItems = [
    { label: "Home", path: "/home", active: false },
    { label: "Contact", path: "", active: true },
  ];

  return (
    <>
      <BacktoTop />
      <Navbar />
      <div class="back-to-top"></div>
      <div>
        <PageBanner title="Contact Us" breadcrumbItems={breadcrumbItems} />
      </div>
      <main>
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
