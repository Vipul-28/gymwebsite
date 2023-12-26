import React from 'react';
import { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import "./styless.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
     const navigate=useNavigate();
    const handelsubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5001/register',{name,email,password}).then(result => {
            if(result.data==="User already exixst")
            alert("user already exist");
            else
        navigate("/login")
        })
        .catch(err=>console.log(err));
    }
    
    
  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">Logo</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
           <form onSubmit={handelsubmit}>
            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
            <input wrapperClass='mb-4 mx-5 w-100' label='UserName' id='formControlLg' type='text' size="lg" onChange={(e)=>{setName(e.target.value)}} />
            <input wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e)=>{setEmail(e.target.value)}}/>
            <input wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"  onChange={(e)=>{setPassword(e.target.value)}} />

            <button type="submit" className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</button>
            <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Register here</a></p>
            </form>
          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Signup;