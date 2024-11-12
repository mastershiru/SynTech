import React from "react";
import PageBanner from "./components/pageBanner";
import BacktoTop from "./components/back.to.Top.btn";
import Img2 from "./assets/img/bg_image_2.png";
import Navbar from "./components/navbar";

// import Counter from "./components/counter";
// import ClientSection from "./components/clientSection";
//import Footer from "./components/footer";

export default function About() {
  const breadcrumbItems = [
    { label: "Home", path: "/home", active: false },
    { label: "About", path: "", active: true },
  ];

  return (
    <div>
      <BacktoTop />
      <Navbar />
      <div>
        <PageBanner title="About Us" breadcrumbItems={breadcrumbItems} />
      </div>

      <main>
        <div className="page-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 py-3">
                <div className="img-fluid text-center">
                  <img src={Img2} alt="" />
                </div>
              </div>
              <div className="col-lg-6 py-3 pr-lg-5">
                <h2 className="title-section">
                  We're <span className="marked">Dynamic</span> Team of
                  Creatives People
                </h2>
                <div className="divider"></div>
                <p>
                  We provide marketing services to startups & small business
                  looking for a partner for their digital media, design &
                  development lead generation & communication.
                </p>
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
      </main>
      {/* 
      <Footer /> */}
    </div>
  );
}
