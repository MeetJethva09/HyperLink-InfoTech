import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()
    const {register , handleSubmit} = useForm({})

    const submitHandler = async (data) =>{
      try{
            const res = await axios.post("/login" , data)
            localStorage.setItem("id" , res.data.data._id);
            alert("Login succes...")
            if(res.data.data.role === "Student") navigate("/homes");
            if(res.data.data.role === "Teacher") navigate("/homet");
      }
      catch(err){
          if(err.status === 404){
            alert("Invalid Credentialsss..")
          }
      }
    }


  return (
    <div>

              <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="example@gmail.com"
              className="mt-1 w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="********"
              className="mt-1 w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Login   
          </button>
          <center>OR <br />
          <Link to={"/"}>Signup</Link>
          </center>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Student Grade Management System
        </p>
      </div>
    </div>

    </div>
  )
}
