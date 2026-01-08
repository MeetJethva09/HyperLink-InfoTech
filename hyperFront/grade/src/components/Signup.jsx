import axios from 'axios';
import {useForm} from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate()
    const  {register , handleSubmit} = useForm({})

    const submitHandler = async (data) =>{
        const res = await axios.post("/add-user" , data)
        navigate("/login")
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Signup
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


          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="abcdefgh"
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

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Signup As
            </label>
            <select className="mt-1 w-full px-4 py-2 border rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500"
            {...register("role")}
            >
              <option value='Student'>Student</option>
              <option value='Teacher'>Teacher</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Signup
          </button>
          <center> OR <br />
          <p> <Link to={"/login"}>Login</Link> </p> 
          </center>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Student Grade Management System
        </p>
      </div>
    </div>
  );
}
