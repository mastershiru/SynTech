import React from "react";
import PageBanner from "./components/pageBanner";
import BacktoTop from "./components/back.to.Top.btn";
import Navbar from "./components/navbar";

export default function About() {
  const breadcrumbItems = [
    { label: "Home", path: "/home", active: false },
    { label: "News", path: "", active: true },
  ];

  return (
    <>
      <BacktoTop />
      <Navbar />
      <div>
        <PageBanner title="News" breadcrumbItems={breadcrumbItems} />
      </div>

      <main>
        {/* <div className="page-section">
          <div className="container">
            <div className="row">
              
              <div className="col-md-6 col-lg-4 py-3">
                <div className="card-blog">
                  <div className="header">
                    <div className="avatar">
                      <img src={person1} alt="" />
                    </div>
                    <div className="entry-footer">
                      <div className="post-author">Sam Newman</div>
                      <a href="/" className="post-date">
                        23 Apr 2020
                      </a>
                    </div>
                  </div>
                  <div className="body">
                    <div className="post-title">
                      <a href="blog-single.html">
                        What is Business Management?
                      </a>
                    </div>
                    <div className="post-excerpt">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </div>
                  <div className="footer">
                    <a href="blog-single.html">
                      Read More{" "}
                      <span className="mai-chevron-forward text-sm"></span>
                    </a>
                  </div>
                </div>
              </div>

              
              <div className="col-md-6 col-lg-4 py-3">
                <div className="card-blog">
                  <div className="header">
                    <div className="avatar">
                      <img src={person2} alt="" />
                    </div>
                    <div className="entry-footer">
                      <div className="post-author">Sam Newman</div>
                      <a href="/" className="post-date">
                        23 Apr 2020
                      </a>
                    </div>
                  </div>
                  <div className="body">
                    <div className="post-title">
                      <a href="blog-single.html">What is Assets Management?</a>
                    </div>
                    <div className="post-excerpt">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </div>
                  <div className="footer">
                    <a href="blog-single.html">
                      Read More{" "}
                      <span className="mai-chevron-forward text-sm"></span>
                    </a>
                  </div>
                </div>
              </div>

              
              <div className="col-md-6 col-lg-4 py-3">
                <div className="card-blog">
                  <div className="header">
                    <div className="avatar">
                      <img src={person3} alt="" />
                    </div>
                    <div className="entry-footer">
                      <div className="post-author">Sam Newman</div>
                      <a href="/" className="post-date">
                        23 Apr 2020
                      </a>
                    </div>
                  </div>
                  <div className="body">
                    <div className="post-title">
                      <a href="blog-single.html">
                        What is Code of Conduct Business?
                      </a>
                    </div>
                    <div className="post-excerpt">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </div>
                  <div className="footer">
                    <a href="blog-single.html">
                      Read More{" "}
                      <span className="mai-chevron-forward text-sm"></span>
                    </a>
                  </div>
                </div>
              </div>

              
              <div className="col-md-6 col-lg-4 py-3">
                <div className="card-blog">
                  <div className="header">
                    <div className="avatar">
                      <img src={person1} alt="" />
                    </div>
                    <div className="entry-footer">
                      <div className="post-author">Sam Newman</div>
                      <a href="/" className="post-date">
                        23 Apr 2020
                      </a>
                    </div>
                  </div>
                  <div className="body">
                    <div className="post-title">
                      <a href="blog-single.html">
                        What is Business Management?
                      </a>
                    </div>
                    <div className="post-excerpt">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </div>
                  <div className="footer">
                    <a href="blog-single.html">
                      Read More{" "}
                      <span className="mai-chevron-forward text-sm"></span>
                    </a>
                  </div>
                </div>
              </div>

              
              <div className="col-md-6 col-lg-4 py-3">
                <div className="card-blog">
                  <div className="header">
                    <div className="avatar">
                      <img src={person2} alt="" />
                    </div>
                    <div className="entry-footer">
                      <div className="post-author">Sam Newman</div>
                      <a href="/" className="post-date">
                        23 Apr 2020
                      </a>
                    </div>
                  </div>
                  <div className="body">
                    <div className="post-title">
                      <a href="blog-single.html">
                        What is Business Management?
                      </a>
                    </div>
                    <div className="post-excerpt">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </div>
                  <div className="footer">
                    <a href="blog-single.html">
                      Read More{" "}
                      <span className="mai-chevron-forward text-sm"></span>
                    </a>
                  </div>
                </div>
              </div>

              
              <div className="col-md-6 col-lg-4 py-3">
                <div className="card-blog">
                  <div className="header">
                    <div className="avatar">
                      <img src={person3} alt="" />
                    </div>
                    <div className="entry-footer">
                      <div className="post-author">Sam Newman</div>
                      <a href="/" className="post-date">
                        23 Apr 2020
                      </a>
                    </div>
                  </div>
                  <div className="body">
                    <div className="post-title">
                      <a href="blog-single.html">
                        What is Business Management?
                      </a>
                    </div>
                    <div className="post-excerpt">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </div>
                  <div className="footer">
                    <a href="blog-single.html">
                      Read More{" "}
                      <span className="mai-chevron-forward text-sm"></span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-4 py-3">
                <div className="card-blog">
                  <div className="header">
                    <div className="avatar">
                      <img src={person1} alt="" />
                    </div>
                    <div className="entry-footer">
                      <div className="post-author">Sam Newman</div>
                      <a href="/" className="post-date">
                        23 Apr 2020
                      </a>
                    </div>
                  </div>
                  <div className="body">
                    <div className="post-title">
                      <a href="blog-single.html">
                        What is Business Management?
                      </a>
                    </div>
                    <div className="post-excerpt">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </div>
                  <div className="footer">
                    <a href="blog-single.html">
                      Read More{" "}
                      <span className="mai-chevron-forward text-sm"></span>
                    </a>
                  </div>
                </div>
              </div>

              
              <div className="col-md-6 col-lg-4 py-3">
                <div className="card-blog">
                  <div className="header">
                    <div className="avatar">
                      <img src={person2} alt="" />
                    </div>
                    <div className="entry-footer">
                      <div className="post-author">Sam Newman</div>
                      <a href="/" className="post-date">
                        23 Apr 2020
                      </a>
                    </div>
                  </div>
                  <div className="body">
                    <div className="post-title">
                      <a href="blog-single.html">What is Assets Management?</a>
                    </div>
                    <div className="post-excerpt">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </div>
                  <div className="footer">
                    <a href="blog-single.html">
                      Read More{" "}
                      <span className="mai-chevron-forward text-sm"></span>
                    </a>
                  </div>
                </div>
              </div>

              
              <div className="col-md-6 col-lg-4 py-3">
                <div className="card-blog">
                  <div className="header">
                    <div className="avatar">
                      <img src={person3} alt="" />
                    </div>
                    <div className="entry-footer">
                      <div className="post-author">Sam Newman</div>
                      <a href="/" className="post-date">
                        23 Apr 2020
                      </a>
                    </div>
                  </div>
                  <div className="body">
                    <div className="post-title">
                      <a href="blog-single.html">
                        What is Code of Conduct Business?
                      </a>
                    </div>
                    <div className="post-excerpt">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </div>
                  <div className="footer">
                    <a href="blog-single.html">
                      Read More{" "}
                      <span className="mai-chevron-forward text-sm"></span>
                    </a>
                  </div>
                </div>
              </div>

              
              <div className="col-12 mt-5">
                <nav aria-label="Page Navigation">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a
                        className="page-link"
                        href="/"
                        tabIndex="-1"
                        aria-disabled="true"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        1
                      </a>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <a className="page-link" href="/">
                        2 <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div> */}
      </main>

      {/* <Footer /> */}
    </>
  );
}
