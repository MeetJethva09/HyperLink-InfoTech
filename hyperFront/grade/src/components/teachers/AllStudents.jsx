import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const AllStudents = () => {

    const [students , setStudents] = useState([])

    const getStudents = async() =>{
        const res= await axios.get("/all-grades");
        setStudents(res.data.data);
        console.log(res.data.data)
    }
useEffect(()=>{
    getStudents()
},[])
  return (
    <>
        
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
                <th className="px-4 py-2 text-sm text-gray-600">Status</th>
                <th className="px-4 py-2 text-sm text-gray-600">Marks</th>
                <th className="px-4 py-2 text-sm text-gray-600">Grade</th>
               
              </tr>
            </thead>
            <tbody>
                     {
                        students.length > 0 ? students?.map((s)=>{
                                return (
                            <tr className="border-t">
                            <td className="px-4 py-2">{s.student?.studentId}</td>
                            <td className="px-4 py-2">{s.student?.name}</td>
                            <td className="px-4 py-2">{s.student?.studentClass}</td>
                            <td className="px-4 py-2">{s.subject}</td>
                            <td className="px-4 py-2">{s.marks}</td>
                            <td className="px-4 py-2">{s.grade}</td>
                            
        
                           
                        </tr>
                                )
                        }) : <p>No student yet..</p>
                     }

            </tbody>
            </table>
            </div>

        </>

  )
}
