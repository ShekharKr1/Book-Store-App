import React from 'react'
import Home from './Home/Home.jsx'
import Courses from '../src/Courses/Courses.jsx'
import Signup from './components/Signup.jsx'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
     <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={<Courses/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </div>
    </>
  
  )};

export default App
