import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { BASE_URL } from '../Services/baseUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProjectAPI } from '../Services/allAPI';
import { editProjectResponseContext } from '../Contexts/ContextShare';



function EditProject({project}) {
    const {editProjectResponse,setEditProjectResponse}= useContext(editProjectResponseContext)
    const [projectDetails,setProjectDetails]=useState({
        id:project._id,title:project.title,languages:project.languages,overview:project.overview,github:project.github,website:project.website,projectImage:""
      })
    const [preview,setPreview]=useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setProjectDetails({
            id:project._id,title:project.title,languages:project.language,overview:project.overview,github:project.github,website:project.website,projectImage:""
        })
        setPreview("")
    }
    const handleShow = () => setShow(true);
      
      useEffect(()=>{
        if(projectDetails.projectImage){
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }
      },[projectDetails.projectImage])

      const handleUpdate = async ()=>{
        const {id,title,languages,github,website,overview,projectImage}=projectDetails
        if(!title || !languages || !overview || !projectImage || !github ||!website){
            toast.info("Please fill the form completely!")
          }else{
            const reqBody = new FormData()
            reqBody.append("title",title)
            reqBody.append("languages",languages)
            reqBody.append("overview",overview)
            reqBody.append("projectImage",projectImage)
            reqBody.append("github",github)
            reqBody.append("website",website)
            preview?reqBody.append("projectImage",project.projectImage):reqBody.append("projectImage",project.projetImage)
            const token = sessionStorage.getItem("token")

            if(preview){
                const reqHeader = {
                    "Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`
                }
                // api call
                const result = await editProjectAPI(id,reqBody,reqHeader)
                if(result.status===200){
                    handleClose()
                    // pass response to my projects
                    setEditProjectResponse(result.data)
                }else{
                    console.log(result);
                    toast.error(result.response.data)
                }
            }else{
                const reqHeader={
                    "Content-Type":"application/json","Authorization":`Bearer ${token}`
                }
                // api call
                const result = await editProjectAPI(id,reqBody,reqHeader)
                if(result.status===200){
                    handleClose()
                    // pass response to my projects
                    setEditProjectResponse(result.data)
                }else{
                    console.log(result);
                    toast.error(result.response.data)
                }
            }
          }
      }

  return (
    <>
    <button onClick={handleShow} className='btn'><i class="fa-solid fa-pen-to-square"></i></button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
          <div className="col-lg-6">
          <label>
                    <input type="file" style={{display:'none'}} onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}/>
                    <img style={{width:"350px"}}  src={preview?preview:`${BASE_URL}/uploads/${project.projectImage}`} alt="project-pic" />
                </label>
          </div>
          <div className="col-lg-6">
          <div className='mb-3'> <input type="text" className='form-control' placeholder='Project Title' value={projectDetails.title} onChange={e=>setProjectDetails({...setProjectDetails,title:e.target.value})}  /></div>
          <div className='mb-3'><input type="text" className='form-control' placeholder='Language Used' value={projectDetails.languages} onChange={e=>setProjectDetails({...setProjectDetails,languages:e.target.value})} /></div>
                <div className='mb-3'><input type="text" className='form-control' placeholder='Github Link' value={projectDetails.github}  onChange={e=>setProjectDetails({...setProjectDetails,github:e.target.value})} /></div>
                <div className='mb-3'><input type="text" className='form-control' placeholder='Website Link' value={projectDetails.website}  onChange={e=>setProjectDetails({...setProjectDetails,website:e.target.value})} /></div>
                <div className='mb-3'><input type="text" className='form-control' placeholder='Project Overview' value={projectDetails.overview}  onChange={e=>setProjectDetails({...setProjectDetails,overview:e.target.value})}  /></div>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button onClick={handleUpdate}  variant="primary">UPDATE</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-right" autoClose={2000} theme="colored"/>
    </>
  )
}

export default EditProject