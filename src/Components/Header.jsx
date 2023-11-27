import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header({insideDashboard}) {
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
         <div className='btn btn-warning d-flex aligin-items-center '>Logout<i class="fa-solid fa-arrow-right-from-bracket"></i></div>
          }
       </Container>
      </Navbar>
    </>
  )
}

export default Header