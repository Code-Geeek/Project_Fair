import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'


function Profile() {
    const [open,setOpen] =useState(false);
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
                    <label className='text-center' htmlFor="">
                        <input id='profile' style={{display:'none'}} type="file" />
                        <img width={'200px'} height={'200px'} className='rounded-circle' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                    </label>
                    <div className='mt-3'>
                        <input type="text" className='form-control ' placeholder='Github' />
                    </div>
                    <div className='mt-3'>
                        <input type="text" className='form-control ' placeholder='LinkedIn' />
                    </div>
                    <div className="mt-3 w-100">
                        <button className='btn btn-warning'>Update</button>
                    </div>
                </div>
            </Collapse>
        </div>
    </>
  )
}

export default Profile