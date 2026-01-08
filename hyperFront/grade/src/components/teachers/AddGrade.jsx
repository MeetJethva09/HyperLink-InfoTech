import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AddGrade() {
    const navigate = useNavigate()
    const id = useParams().id;
    const {register , handleSubmit} = useForm({});
    const submitHandler = async (data)  =>{
        data.student = id;
        const res = await axios.post("/add-grades/"+id , data);
        alert("Grade Assign...")
        navigate("/homet")
    }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Assign Grade
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>

          {/* Student ID */}
       

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
            {...register("subject")}
              type="text"
              placeholder="Enter Subject"
              className="mt-1 w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Marks */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Marks
            </label>
            <input
            {...register("marks")}
              type="number"
              placeholder="Enter Marks"
              className="mt-1 w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Assign Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Assign Grade
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
