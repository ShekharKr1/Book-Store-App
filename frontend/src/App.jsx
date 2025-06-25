import React from 'react'
import Home from './Home/Home.jsx'
import Courses from '../src/Courses/Courses.jsx'
import Signup from './components/Signup.jsx'
import {Routes,Route, Navigate} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider.jsx'
function App() {
   //logedin user 
    const[authuser,setAuthUser]=useAuth()
    console.log(authuser);
    
  return (
    <>
     <div className='dark:bg-slate-900 dark:text-white'>
              <Toaster position="top-center" reverseOrder={false} /> {/* ✅ Correct location */}

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={authuser?<Courses/>:<Navigate to='/signup'/>} />
        <Route path='/signup' element={<Signup/>}/>
      
      </Routes>
    
      </div>
    </>
  
  )};

export default App
