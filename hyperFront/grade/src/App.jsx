import { useState } from 'react'
import axios from 'axios'
import { Link, Route , Routes } from 'react-router-dom';
import StudentHome from './components/students/StudentHome';
import TeacherHome from './components/teachers/TeacherHome';
import Signup from './components/Signup';
import { Login } from './components/Login';
import AddStudent from './components/teachers/AddStudent';
import AddGrade from './components/teachers/AddGrade';
import { AllStudents } from './components/teachers/AllStudents';

function App() {
  
axios.defaults.baseURL = "http://localhost:3000",
axios.defaults.withCredentials = true;

  return (
    <>
          <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='homes' element={<StudentHome/>}/>
            <Route path="homet" element={<TeacherHome/>}/>
            <Route path='/add-student' element={<AddStudent/>}/>
            <Route path='/add-grade/:id' element={<AddGrade/>}/>
            <Route path='/allgrades' element={<AllStudents/>}/>
          </Routes>
    </>
  )
}

export default App
