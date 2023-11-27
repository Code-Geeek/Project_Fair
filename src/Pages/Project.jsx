import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { allProjectAPI } from '../Services/allAPI'


function Project() {
  const [searchKey,setSearchKey]=useState("")

  const [allProjects,setAllProjects]=useState([])
  const getallProjects = async ()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"application/json","Authorization":`Bearer ${token}`
      }
      const result = await allProjectAPI(searchKey,reqHeader)
      if (result.status===200) {
        setAllProjects(result.data)
      }else{
        console.log(result);
      }
  }
}
useEffect(()=>{
  getallProjects()
},[searchKey])  

  return (
    <>
      <Header/>
      <div style={{marginTop:'100px'}} className="projects">
        <h1 className='text-center'>All Projects</h1>
        <div className="d-flex justify-content-center align-items-center w-100">
          <div className="d-flex border w-50 rounded">
            <input placeholder='Search Projects by Technologies Used' className='form-control' type="text" onChange={e=>setSearchKey(e.target.value)}  />
            <i style={{marginLeft:'-50px'}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
          </div>
        </div>
        <Row className='mt-5 container-fluid'>
            {allProjects?.length>0?allProjects?.map(project=>(
            <Col sm={12} md={6} lg={4}>
              <ProjectCard project={project}/>
            </Col>
            )):<p style={{fontSize:"50px"}} className='fw-bolder text-danger m-5 text-center'>Please login to view all projects!!!</p>}
          </Row>
      </div>
    </>
  )
}

export default Project