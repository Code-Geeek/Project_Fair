import React, { useEffect, useState } from 'react'
import AddProject from './AddProject'
import { userProjectAPI } from '../Services/allAPI'

function MyProjects() {
    const [userProjects,setUserProjects]= useState([])
    const getUserProjects= async ()=>{
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type":"application/json","Authorization":`Bearer ${token}`
        }
        const result = await userProjectAPI(reqHeader)
        if(result.status===200){
            setUserProjects(result.data)
        }else{
            console.log(result);
            alert("result.response.data")
        }
    }
}
    useEffect(()=>{
        getUserProjects()
    },[])
  return (
    <>
    <div className='card shadow p-3 mt-3'>
        <div className='d-flex'>
            <h2>MyProjects</h2>
            <div className="ms-auto"><AddProject/></div>
        </div>
        <div className="mt-4">
            {/* collection of user projects */}
           { userProjects?.length>0?userProjects.map(project=>(
                <div className="border d-flex align-items-center rounded p-2">
                <h5>{project.title}</h5>
                <div className="icon ms-auto">
                    <button className='btn'><i class="fa-solid fa-pen-to-square"></i></button>
                    <a href={`${project.github}`} className='btn'><i class="fa-solid fa-trash"></i></a>
                    <button className='btn'><i class="fa-brands fa-github"></i></button>
                </div>
            </div>
           )):<p className='text-danger fw-bolder fs-5'>No Projects Uploaded yet!</p>
            }
        </div>
    </div>
    </>
  )
}

export default MyProjects