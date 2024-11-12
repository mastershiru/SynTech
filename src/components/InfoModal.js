import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../assets/css/modal.css";
import Img1 from "../assets/img/bg_image_1.png";
import Img2 from "../assets/img/bg_image_2.png";
import Img3 from "../assets/img/bg_image_3.png";

const InfoModal = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="custom-modal"
    >
      <Modal.Header>
        <Modal.Title>More Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="row">
          <div class="col-lg-6">
            <h1>
              Empower Your Institution with a Proven Student Information System
            </h1>
            <p>
              Elevate Your School's Efficiency with Our Comprehensive Student
              Information System. Are you tired of manual processes and outdated
              systems? Our state-of-the-art Student Information System is
              designed to streamline your school's operations and enhance the
              overall student experience.
            </p>
          </div>
          <div class="col-lg-6">
            <div className="img-place">
              <img src={Img1} alt="" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div className="img-place">
              <img src={Img3} alt="" />
            </div>
          </div>

          <div class="col-lg-6">
            <h6>Key Features:</h6>
            <ul>
              <li>
                <strong>Seamless Enrollment:</strong> Simplify the admission and
                registration process with our efficient online enrollment
                system.
              </li>
              <li>
                <strong>Streamlined Payments:</strong> Manage fees and payments
                seamlessly with our integrated cashiering system.
              </li>
              <li>
                <strong>Efficient Grading:</strong> Automate the grading process
                and generate accurate reports.
              </li>
              <li>
                <strong>Intelligent Scheduling:</strong> Optimize class
                schedules and resource allocation.
              </li>
              <li>
                <strong>Comprehensive Curriculum Management:</strong> Easily
                manage your school's curriculum and track student progress.
              </li>
              <li>
                <strong>Robust Security:</strong> Protect sensitive student data
                with our advanced security measures.
              </li>
              <li>
                <strong>Scalability:</strong> Easily adapt to your school's
                growing needs.
              </li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h6>Proven Success:</h6>
            <p>
              Our system has been successfully implemented in numerous
              universities and K-12 institutions since 2018. We understand the
              unique challenges faced by educational institutions and have
              designed our system to provide practical solutions.
            </p>
          </div>
          <div class="col-lg-6">
            <div className="img-place">
              <img src={Img2} alt="" className="img2" />
            </div>
          </div>
        </div>

        <h6>Ready to Transform Your School?</h6>
        <p>
          Contact us today to learn more about how our Student Information
          System can revolutionize your institution.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="custom-button"
          variant="secondary"
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InfoModal;
