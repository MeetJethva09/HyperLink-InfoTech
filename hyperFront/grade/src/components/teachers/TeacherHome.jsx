import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TeacherHome() {
    const navigate = useNavigate()
    const [studnets , setStudents] = useState([]);
    const [loginUser , setLoginUser] = useState({});
    

    const logoutAction = async() =>{
        console.log("clicke")
        await axios.get("/logout");
        localStorage.clear()
        navigate("/login")
    }

    const getDashboardData = async () =>{
        const [studnetsRes,loginUserRes,gradeRes] = await Promise.all([ axios.get("/students") ,
                                                               axios.get("/user/"+localStorage.getItem("id")),

         ]);
        setStudents(studnetsRes.data.data);
        setLoginUser(loginUserRes.data.data);
       
      
    }

useEffect(()=>{
    getDashboardData()
},[])

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header */}
      <header className="bg-indigo-600 text-white px-6 py-4 flex  justify-between">
        <h1 className="text-xl font-semibold">
          Teacher Dashboard
        </h1>
        <div className="flex gap-6">
        <Link to={"/add-student"}><button className="bg-red-400 text-white p-1 rounded">Add Student</button>
        </Link>
        <button onClick={logoutAction} className="bg-blue-200 text-black p-1 rounded">Logout</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        
        {/* Welcome Card */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Welcome, {loginUser.name}
          </h2>
          <p className="text-gray-600 mt-1">
            Manage students and enter grades
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <p className="text-gray-500 text-sm">Total Students</p>
            <h3 className="text-2xl font-bold text-gray-800">{studnets.length}</h3>
          </div>

         

        </div>

        {/* Students Table */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Students Overview
          </h2>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 text-sm text-gray-600">Student ID</th>
                <th className="px-4 py-2 text-sm text-gray-600">Name</th>
                <th className="px-4 py-2 text-sm text-gray-600">Class</th>
                <th className="px-4 py-2 text-sm text-gray-600">Grade Status</th>
                <th className="px-4 py-2 text-sm text-gray-600">Grade</th>
               
              </tr>
            </thead>
            <tbody>
                { studnets.length > 0 ? studnets?.map((student)=>{
                    return (
                        <tr className="border-t">
                            <td className="px-4 py-2">{student.studentId}</td>
                            <td className="px-4 py-2">{student.name}</td>
                            <td className="px-4 py-2">{student.studentClass}</td>
                            <td>{student.gradeStatus}</td>
                            <Link to={`/add-grade/${student._id}`}><td><button className="bg-red-300 p-1 rounded w-20">Add</button></td></Link>
                           
                        </tr>
                    )
                })
               
           : "No student yet.." }

            </tbody>
          </table>
        </div>
                    <Link to={"/allgrades"}><button className="bg-red-200 p-1 rounded mt-5">Show all</button></Link>
      </main>
    </div>
  );
}
