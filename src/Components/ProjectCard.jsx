import React, { useState } from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";
import p1 from "../Assets/image_processing20210102_7424_10uusgr_40d937428e.gif";
import { BASE_URL } from "../Services/baseUrl";



function ProjectCard({project}) {
    
    // modal
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
       { project&&
       <Card style={{width:"400px"}} className="shadow mb-5 btn" onClick={handleShow}>
        <Card.Img style={{ width: "350px" }} variant="top" src={project?`${BASE_URL}/uploads/${project?.projectImage}`:p1} alt=""  />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
        </Card.Body>
      </Card>
}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
                <img style={{height:"200px"}} className="img-fluid" src={project?`${BASE_URL}/uploads/${project?.projectImage}`:p1} alt="" />
            </Col>
            <Col md={6}>
                <h2 className="text-warning fw-bolder">{project.title}</h2>
                <p>Project Overview : <span className="fw-bolder text-primary">{project?.overview}</span></p>
                <p>Languages Used: <span className="fw-bolder text-danger">{project?.languages}</span></p>
            </Col>
          </Row>
          <div className="mt-3">
            <a href={project?.github} target="_blank" className="me-5 btn"><i class="fa-brands fa-github fa-2x"></i></a>
            <a href={project?.website} target="_blank" className="me-5 btn"><i className="fa-solid fa-link fa-2x"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCard;
