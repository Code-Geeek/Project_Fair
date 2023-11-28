import React, { useContext } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorizationContext } from '../Contexts/TokenAuth'


function Header({insideDashboard}) {
  const {isAuthorized,setIsAuthorized}= useContext(tokenAuthorizationContext)
  const navigate = useNavigate()
  const handleLogout = ()=>{
    // remove all existing user details from browser
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAuthorized(false)
    // navigate to landing page
    navigate('/')
  }
  return (
    <>
    <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand>
            <Link style={{textDecoration:'none',color:'white'}} to={'/'}>
            <i
              className="fa-solid fa-truck-fast me-2"
              style={{ color: "#ffffff" }}
            ></i>{' '}
            Project Fair
            </Link>
          </Navbar.Brand>
          {insideDashboard && 
         <div onClick={handleLogout} className='btn btn-warning d-flex aligin-items-center '>Logout<i class="fa-solid fa-arrow-right-from-bracket"></i></div>
          }
       </Container>
      </Navbar>
    </>
  )
}

export default Header