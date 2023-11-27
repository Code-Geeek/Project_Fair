import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'

function Dashboard() {
  const [username,setUsername]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      setUsername(JSON.parse(sessionStorage.getItem('existingUser')).username)
    }
  },[])
  return (
    <>
    <Header insideDashboard/>
    <Row className='container-fluid' style={{marginTop:'100px'}}>

      <Col className='' sm={12} md={8}>
        {/* my project section */}
        <h2 className='text-danger'>Welcome <span className='text-warning'>{username}</span></h2>
        <MyProjects/>
      </Col>
      <Col className='' sm={12} md={4}>
        {/* my profile */}
        <Profile/>
      </Col>
    </Row>

    </>
  )
}

export default Dashboard