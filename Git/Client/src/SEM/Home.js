import React,{useState} from 'react'
import './Style.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'

const MovieList = () => {
    const [food, setFood] = useState([])
    const [amount, setAmount] = useState(0)
    console.log(amount);
    console.log(food);
    console.log(localStorage.getItem('UserToken'));
        const navigate=useNavigate()

     React.useEffect(()=>{
        if(!localStorage.getItem('UserToken')){
            navigate('/User/login')
        }
    })
    const Buy = () => {
        const url='http://localhost:4578/api/Data/Create'
        axios({
                method:"post",
            url: url,
            data: {
                   Food:food,
                      Amount:amount 
                },
                headers:{
                    accept: 'application/json',
                    token:localStorage.getItem('UserToken')
                }
            }).then(res=>{
               toast.success('🦄 successfully logedin!!!', {
                        className:"toast-success",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                // console.log(data);
            }).catch(err=>{
                console.error(err.message);
            })
    }
  return (
    <div>
        <center>
        <h1>vanga sapidalam</h1>
              <div style={{ 
                  display: "flex",
                  border: '1px solid red',
                  width: '100%',
                  height: "100%",
                  justifyContent:'space-around'
           }} >
                  <div>
                      <img className='img' src='https://www.ticklingpalates.com/wp-content/uploads/2022/03/plain-dosa-with-dosa-batter-made-in-mixie-jar.jpg' alt="IMG" />
                      <h6>Rate= $40</h6>
                      <button
                          onClick={() => {
                              setFood(exData => [...exData, 'Dosa'])
                              setAmount(amount+40)
                      }}
                      >ADD</button>
                  </div>
                   <div>
                      <img className='img' src='https://www.foodie-trail.com/wp-content/uploads/2020/06/251fdbc0-57f6-41c3-a976-5192391cf040.jpg' alt="IMG" />
                      <h6>Rate= $25</h6>
                      <button
                       onClick={() => {
                              setFood(exData => [...exData, 'IDLI'])
                              setAmount(amount+25)
                      }}
                      >ADD</button>
                  </div>
                   <div>
                      <img className='img' src='https://static.toiimg.com/thumb/56665108.cms?imgsize=694167&width=509&height=340' alt="IMG" />
                      <h6>Rate= $60</h6>
                      <button
                       onClick={() => {
                              setFood(exData => [...exData, 'chapati'])
                              setAmount(amount+60)
                      }}
                      >ADD</button>
                  </div>
                   <div>
                      <img className='img' src='https://www.spiceindiaonline.com/wp-content/uploads/2014/01/Ven-Pongal-3.jpg' alt="IMG" />
                      <h6>Rate= $50</h6>
                      <button
                       onClick={() => {
                              setFood(exData => [...exData, 'VenPongal'])
                              setAmount(amount+50)
                      }}
                      >ADD</button>
              </div>
            </div>
              {
                  food.length > 0 ?
                      food.map((item, i) => {
                          return (
                              <>
                                  <h3>{item}</h3>
                                  
                              </>
                      )
                  })
                  : null
              }
              Amount={amount}
              <br />
              <button onClick={Buy}>BUY</button>
              <br />
              <br />
              <br />

              <button
                  onClick={() => {
                      localStorage.clear()
                       navigate('/User/login')
              }}
              >LogOut</button>
          </center>
          <ToastContainer />
    </div>
  )
}

export default MovieList