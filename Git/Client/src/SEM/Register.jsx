import React,{useState} from 'react'
import './register.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
const Register = () => {
   
        const[name,setName]=useState();
        const[email,setEmail]=useState();
        const[password,setPassword]=useState();

        var url="http://localhost:4578/api/user/Register"
        const navigate=useNavigate();
        const Reg=()=>{
          if(!name || !email || !password ){
            toast.error("Fill the required fields")
          }else{
            
                axios.post(url,{
                    name:name,
                    email:email,
                    password:password,
                  
                 }).then(res=>{
                    console.log(res.data);
                    toast.success('🦄 successfully Registered!!!', {
                        className:"toast-success",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        navigate('/user/login')


                 }).catch(err=>{
                    console.log(err.message);
                    toast.error("😒Email is alreadyTaken")
                 })
            }
            
          
        };
  return (
    // <center>
<div className="main">

    <div className="container">
      <center>

    <header>Registration</header>
      </center>
    <div className="formfield" >
        <div className="form first">
            <div className="details personal">
              <span className="title">Personal Details</span>

                <div className="fields">
                    <div className="input-field">
                        <label>Full Name <span style={{color: 'red'}} >*</span></label>
                        <input type="text" placeholder="Enter your name" onChange={e=>setName(e.target.value)}  required />
                    </div>
                     <div className="input-field">
                        <label>Email <span style={{color: 'red'}} >*</span></label>
                        <input type="email" placeholder="Enter your email" required onChange={e=>setEmail(e.target.value)}  />
                    </div>

                    <div className="input-field">
                        <label>Password <span style={{color: 'red'}} >*</span></label>
                        <input type="number" placeholder="Enter mobile number" onChange={e=>setPassword(e.target.value)} />  
                    </div>

                 

                   
                </div>
            </div>

            <div className="details ID">

                

                <button className="nextBtn" onClick={Reg} >
                    <span className="btnText">register 🍁</span>
                   
                </button>
             
            </div> 
        </div>
    </div>
    
</div>
<ToastContainer />
    </div>
    // </center>
  )
}

export default Register