import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentHome() {
    const navigate = useNavigate()
    const [user,setUser] = useState({});
    const [grade,setGrade] = useState([]);

      const logoutAction = async() =>{
        console.log("clicke")
        await axios.get("/logout");
        localStorage.clear()
        navigate("/login")
    }

    const getDashboardData = async () =>{
            const [userRes,gradeRes] = await Promise.all([axios.get("/user/"+localStorage.getItem("id")),
                                                axios.get("/findgrade/"+localStorage.getItem("id"),
                                                )])
            setUser(userRes.data.data);
            setGrade(gradeRes.data.data);
            console.log(gradeRes.data.data)
    }

useEffect(()=>{
    getDashboardData()
},[])

            const average = grade.length ? grade.reduce((sum, g) => sum + g.marks, 0) / grade.length: 0;

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header */}
      <header className="bg-blue-600 text-white px-6 py-4 flex justify-between">
        <h1 className="text-xl font-semibold">
          Student Dashboard
        </h1>
         <button onClick={logoutAction} className="bg-blue-200 text-black p-1 rounded">Logout</button>
      </header>

      {/* Main Content */}
      <main className="p-6">
        
        {/* Welcome Card */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Welcome, {user.name}
          </h2>
          <p className="text-gray-600 mt-1">
            View your grades and academic performance
          </p>
        </div>

        {/* Grade Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <p className="text-gray-500 text-sm">Average Marks</p>
            <h3 className="text-2xl font-bold text-gray-800">{average}</h3>
          </div>

        </div>

        {/* Grades Table */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Subject-wise Grades
          </h2>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 text-sm text-gray-600">Subject</th>
                <th className="px-4 py-2 text-sm text-gray-600">Marks</th>
                <th className="px-4 py-2 text-sm text-gray-600">Grade</th>
              </tr>
            </thead>
            <tbody>
                { grade.length === 0 ? <p className="text-red-700">No grade Assigned Yet..</p> :  grade?.map((g)=>{
                    return (
                        <tr className="border-t">
                            <td className="px-4 py-2">{g.subject}</td>
                            <td className="px-4 py-2">{g.marks}</td>
                            <td className="px-4 py-2 font-semibold">{g.grade}</td>
                        </tr>
                    )
                })
                }
             
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}
