import React, { useContext, useEffect, useState } from 'react'
import AddProject from './AddProject'
import { deleteProjectAPI, userProjectAPI } from '../Services/allAPI'
import { Alert } from 'react-bootstrap'
import { addProjectResponseContext, editProjectResponseContext } from '../Contexts/ContextShare'
import EditProject from './EditProject'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyProjects() {
    const {editProjectResponse,setEditProjectResponse}= useContext(editProjectResponseContext)
    const {addProjectResponse,setAddProjectResponse}= useContext (addProjectResponseContext)
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
    },[addProjectResponse,editProjectResponse])

    const handleDelete = async (id)=>{
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`
        }
        // api call
        const result = await deleteProjectAPI(id,reqHeader)
        if(result.status===200){
            // pagereload
            getUserProjects()
        }else{
            toast.error(result.response.data)
        }
    }
  return (
    <>
    <div className='card shadow p-3 mt-3'>
        <div className='d-flex'>
            <h2>MyProjects</h2>
            <div className="ms-auto"><AddProject/></div>
        </div>
        {
            addProjectResponse.title ? <Alert className='bg-success' dismissible> <span className='fw-bolder text-danger'>{addProjectResponse.title}</span>added successfully!!</Alert>:null
        }
        <div className="mt-4">
            {/* collection of user projects */}
           { userProjects?.length>0?userProjects.map(project=>(
                <div className="border d-flex align-items-center rounded p-2">
                <h5>{project.title}</h5>
                <div className="icon ms-auto">
                    <EditProject project={project}/>
                    <a href={`${project.github}`} className='btn'><i class="fa-brands fa-github"></i></a>
                    <button onClick={()=>handleDelete(project._id)} className='btn'><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
           )):<p className='text-danger fw-bolder fs-5'>No Projects Uploaded yet!</p>
            }
        </div>
    </div>
    <ToastContainer position="top-right" autoClose={2000} theme="colored"/>
    </>
  )
}

export default MyProjects