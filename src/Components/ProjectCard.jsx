import React, { useState } from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";
import p1 from "../Assets/image_processing20210102_7424_10uusgr_40d937428e.gif";



function ProjectCard() {
    
    // modal
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{width:"400px"}} className="shadow mb-5 btn" onClick={handleShow}>
        <Card.Img style={{ width: "350px" }} variant="top" src={p1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
                <img style={{height:"200px"}} className="img-fluid" src={p1} alt="" />
            </Col>
            <Col md={6}>
                <h2>Project Title</h2>
                <p>Project Overview</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat atque sit aliquid perferendis sapiente accusamus ipsam illum tempore. Ullam quas ut dignissimos totam cum error repellendus voluptate accusantium odit harum.</p>
                <p>Languages Used: <span className="fw-bolder">HTML,CSS,React</span></p>
            </Col>
          </Row>
          <div className="mt-3">
            <a href="" target="_blank" className="me-5 btn"><i class="fa-brands fa-github fa-2x"></i></a>
            <a href="" target="_blank" className="me-5 btn"><i className="fa-solid fa-link fa-2x"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCard;
