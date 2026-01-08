import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
    const navigate = useNavigate()
    const  {register , handleSubmit} = useForm({})

    const submitHandler =async  (data) =>{
        const res = await axios.post("/add-student" , data);
        alert("Student Addedd..");
        navigate("/homet")
    }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Add Student
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>

          {/* Student Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Student Name
            </label>
            <input
            {...register("name")}
              type="text"
              placeholder="Enter student name"
              className="mt-1 w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="student@email.com"
              className="mt-1 w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Student ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Student ID
            </label>
            <input
              type="text"
              {...register("studentId")}
              placeholder="ST101"
              className="mt-1 w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Class */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Class
            </label>
            <input
              type="text"
              {...register("studentClass")}
              placeholder="10-A"
              className="mt-1 w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Add Student
          </button>

        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Teacher Dashboard
        </p>
      </div>

    </div>
  );
}
