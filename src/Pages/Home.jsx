import React from "react";
import { Col, Row } from "react-bootstrap";
import bgimg from "../Assets/4380.jpg";
import ProjectCard from "../Components/ProjectCard";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* landing section */}
      <div
        style={{ width: "100%", height: "100vh", backgroundColor: "#90ee90" }}
        className="container-fluid rounded"
      >
        <Row className="align-items-center p-5">
          <Col sm={12} md={6}>
            <h1 style={{ fontSize: "80px" }} className="fw-bolder text-light">
              Project Fair
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              asperiores dignissimos, dolorem laudantium enim cumque suscipit
              labore beatae ex possimus corrupti ducimus in quibusdam rerum? Vel
              dolore incidunt eum error.
            </p>
            <button className="btn btn-warning">
              Start to explore{" "}
              <i class="fa-solid fa-right-long fa-beat ms-2"></i>
            </button>
          </Col>
          <Col sm={12} md={6}>
            <img
              style={{ marginTop: "100px" }}
              className="w-75"
              src={bgimg}
              alt=""
            />
          </Col>
        </Row>
      </div>
      {/* all projects section */}
      <div className="all-projects mt-5">
        <h1 className="text-center mb-5">Explore Our Projects</h1>
        <marquee scrollAmount={25}>
          <div className="d-flex">
            <div style={{width:"500px"}}>
              <ProjectCard/>
            </div>
            <div style={{width:"500px"}}>
              <ProjectCard/>
            </div>
            <div style={{width:"500px"}}>
              <ProjectCard/>
            </div>
          </div>
        </marquee>
        <div className="text-center mt-5"><Link to={'/projects'}/>View More Projects</div>
      </div>
    </>
  );
}

export default Home;
