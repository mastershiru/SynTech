import React from "react";
import person1 from "../assets/img/person/person_1.jpg";
import person2 from "../assets/img/person/person_2.jpg";
import person3 from "../assets/img/person/person_3.jpg";

export default function BlogSection() {
  const blogPosts = [
    {
      author: "Sam Newman",
      date: "23 Apr 2020",
      title: "What is Business Management?",
      excerpt: null,
      imgSrc: null,
      link: "blog-single.html",
    },
    {
      author: "Sam Newman",
      date: "23 Apr 2020",
      title: "What is Business Management?",
      excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      imgSrc: person1,
      link: "blog-single.html",
    },
    {
      author: "Sam Newman",
      date: "23 Apr 2020",
      title: "What is Business Management?",
      excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      imgSrc: person2,
      link: "blog-single.html",
    },
    {
      author: "Sam Newman",
      date: "23 Apr 2020",
      title: "What is Business Management?",
      excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      imgSrc: person3,
      link: "blog-single.html",
    },
  ];

  return (
    <div className="page-section border-top">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <div className="subhead">Our Blog</div>
          <h2 className="title-section">
            Read our latest <span className="marked">News</span>
          </h2>
          <div className="divider mx-auto"></div>
        </div>

        <div className="row my-5 card-blog-row">
          {blogPosts.map((post, index) => (
            <div className="col-md-6 col-lg-3 py-3 wow fadeInUp" key={index}>
              <div className="card-blog">
                <div className="header">
                  {post.imgSrc && (
                    <div className="avatar">
                      <img src={post.imgSrc} alt={post.author} />
                    </div>
                  )}
                  <div className="entry-footer">
                    <div className="post-author">{post.author}</div>
                    <a href="/" className="post-date">
                      {post.date}
                    </a>
                  </div>
                </div>
                <div className="body">
                  <div className="post-title">
                    <a href={post.link}>{post.title}</a>
                  </div>
                  {post.excerpt && (
                    <div className="post-excerpt">{post.excerpt}</div>
                  )}
                </div>
                <div className="footer">
                  <a href={post.link}>
                    Read More{" "}
                    <span className="mai-chevron-forward text-sm"></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/about" className="btn btn-outline-primary rounded-pill">
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
}
