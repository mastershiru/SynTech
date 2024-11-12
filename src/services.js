import React from "react";
import PageBanner from "./components/pageBanner";
import BacktoTop from "./components/back.to.Top.btn";
import ServiceContent from "./components/serviceContent";
import Navbar from "./components/navbar";

//import Footer from "./components/footer";

export default function About() {
  const breadcrumbItems = [
    { label: "Home", path: "/home", active: false },
    { label: "Services", path: "", active: true },
  ];

  return (
    <>
      <BacktoTop />
      <Navbar />
      <div>
        <PageBanner title="Services" breadcrumbItems={breadcrumbItems} />
      </div>
      <main>
        <ServiceContent />
      </main>
      {/* <Footer /> */}
    </>
  );
}
