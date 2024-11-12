import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../assets/css/modal.css";
import video from "../assets/video/SynTech.mp4";

const VideoModal = ({ show, handleClose, videoUrl }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="custom-modal"
    >
      <Modal.Header></Modal.Header>
      <Modal.Body>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={video}
            title="Video"
            allowFullScreen
          ></iframe>
        </div>
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

export default VideoModal;
