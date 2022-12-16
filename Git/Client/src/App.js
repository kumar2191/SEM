import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './SEM/HomePage.js'
import Register from './SEM/Register'
import Login from './SEM/Login'
import MovieList from './SEM/Home'
const App = () => {
  return (
    <div>
       <BrowserRouter>
   
   <Routes>
   <Route path="/" element={<Home />}  />
    <Route path="/User/Register" element={<Register />}  />
    <Route path="/User/login" element={<Login />}  />
    <Route path='/res/list' element={<MovieList />} />
     



   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App