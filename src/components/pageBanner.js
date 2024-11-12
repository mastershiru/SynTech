import React from "react";
import { Link } from "react-router-dom";

const PageBanner = ({ title, breadcrumbItems }) => {
  return (
    <div className="container mt-5">
      <div className="page-banner">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-6">
            <nav aria-label="Breadcrumb">
              <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                {breadcrumbItems.map((item, index) => (
                  <li
                    key={index}
                    className={`breadcrumb-item ${item.active ? "active" : ""}`}
                  >
                    {item.active ? (
                      item.label
                    ) : (
                      <Link to={item.path}>{item.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <h1 className="text-center">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner; // Separate export statement
