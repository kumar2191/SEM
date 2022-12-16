import React from 'react'
import {useNavigate} from 'react-router-dom'

const HomePage = () => {
    const navigate=useNavigate();



  return (
    <div>
        <center>

        <h1 style={{
            color:"red"

        }} >vanga sapidalam</h1>
        <button  style={{
            color:"green"
        }} onClick={()=>navigate('/User/Register')} >Register</button>
        <button onClick={()=>navigate('/User/login')} >Login</button>
        </center>
    </div>
  )
}

export default HomePage