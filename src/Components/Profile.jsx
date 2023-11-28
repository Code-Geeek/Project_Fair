import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { BASE_URL } from '../Services/baseUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editUserAPI } from '../Services/allAPI';


function Profile() {
    const [open,setOpen] =useState(false);
    const [userProfile,setUserProfile] = useState({
        username:"",email:"",password:"",profile:"",github:"",linkedin:""
    })
    const [existingImage,setExistingImage]= useState("")
    const [preview,setPreview] = useState("")
    useEffect(()=>{
            const user = JSON.parse(sessionStorage.getItem("existingUser"))
            setUserProfile({...userProfile,username:user.username,email:user.email,
            password:user.password,profile:"",github:user.github,linkedin:user.linkedin})
            setExistingImage(user.profile)
    },[open])

    useEffect(()=>{
        if(userProfile.profile){
            setPreview(URL.createObjectURL(userProfile.profile))
        }else{
            setPreview("")
        }
    },[userProfile.profile])
    const handleProfileUpdate = async ()=>{
        const{username,email,password,profile,github,linkedin}=userProfile
        if(!github || !linkedin){
            toast.info("please fill the form completely")
        }else{
            const reqBody = new FormData()
            reqBody.append("username",username)
            reqBody.append("email",email)
            reqBody.append("password",password)
            reqBody.append("github",github)
            reqBody.append("linkedin",linkedin)
            preview?reqBody.append("profileImage",profile):reqBody.append("profileImage",existingImage)
            const token = sessionStorage.getItem("token")
            if(preview){
                const reqHeader = {
                    "Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`
                }
                // api call
                const res = await editUserAPI(reqBody,reqHeader)
                if(res.status===200){
                    setOpen(!open)
                    sessionStorage.setItem("existingUser",JSON.stringify(res.data))
                }else{
                    setOpen(!open)
                    console.log(res);
                    console.log(res.response.data);
                }
                }else{
                    const reqHeader={
                        "Content-Type":"application/json","Authorization":`Bearer ${token}`
                }
                // api call
                const res = await editUserAPI(reqBody,reqHeader)
                if(res.status===200){
                    setOpen(!open)
                    sessionStorage.setItem("existingUser",JSON.stringify(res.data))
                }else{
                    setOpen(!open)
                    console.log(res);
                    console.log(res.response.data);
                }
            }
        }
    }
  return (
    <>
        <div className='card shadow p-5'>
            <div className="d-flex border rounded justify-content-between">
                <h2>Profile</h2>
                <button   onClick={() => setOpen(!open)} className='btn btn-outline-info'><i class="fa-solid fa-arrow-down"></i></button>
            </div>
            <Collapse in={open}>
                <div className="row justify-content-center mt-3 p-5 shadow " >
                    {/* upload picture */}
                    <label className='text-center'>
                        <input style={{display:'none'}} type="file" onChange={e=>setUserProfile({...userProfile,profile:e.target.files[0]})} />
                        {
                            existingImage!==""?
                            <img width={'200px'} height={'200px'} className='rounded-circle' src={preview?preview:`${BASE_URL}/uploads/${existingImage}`} alt="upload picture" />:
                            <img width={'200px'} height={'200px'} className='rounded-circle' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="upload picture" />
                            }
                    </label>
                    <div className='mt-3'>
                        <input type="text" className='form-control ' placeholder='Github' value={userProfile.github} onChange={e=>setUserProfile({...userProfile,github:e.target.value})} />
                    </div>
                    <div className='mt-3'>
                        <input type="text" className='form-control ' placeholder='LinkedIn' value={userProfile.linkedin} onChange={e=>setUserProfile({...userProfile,linkedin:e.target.value})} />
                    </div>
                    <div className="mt-3 w-100">
                        <button onClick={handleProfileUpdate} className='btn btn-warning'>Update</button>
                    </div>
                </div>
            </Collapse>
        </div>
        <ToastContainer position="top-right" autoClose={2000} theme="colored"/>
    </>
  )
}

export default Profile