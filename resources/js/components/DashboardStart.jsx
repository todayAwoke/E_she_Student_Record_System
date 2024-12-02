import { useEffect, useState } from 'react';
import React from 'react'
import { HiOutlineAcademicCap, HiOutlineAdjustments } from 'react-icons/hi'
import { PiStudent } from "react-icons/pi";
import { FaSchool } from "react-icons/fa";

const DashboardStart = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalUniversity, setTotalUniversities] = useState(0);
  const [maleStudents, setMaleStudents] = useState(0);
  const [femaleStudents, setFemaleStudents] = useState(0);


  useEffect(() => {
    axios.get('http://localhost:8000/api/students/count')
      .then(response => {
        console.log('API Response:', response.data);
        setTotalStudents(response.data.total); // Set the total in state
      })
      .catch(error => {
        console.error("Error fetching total students:", error);
      })
    axios.get('http://localhost:8000/api/university/count')
      .then(response => {
        console.log('API Response:', response.data);
        setTotalUniversities(response.data.total);
      })
      .catch(error => {
        console.error('Error fetching universities:', error)
    })
    axios.get('http://localhost:8000/api/students/count/male')
      .then(response => { 
        setMaleStudents(response.data.total);
      })
      .catch(error => {
        console.error('Error fetching male students:', error)
      })
    axios.get('http://localhost:8000/api/students/count/female')
      .then(response => {
        setFemaleStudents(response.data.total);
      })
      .catch(error => {
        console.error('Error fetching female students:', error)
      })
  }, []);

  return (
    <div className='flex gap-4 w-full'>

      <BorderWraper>
        <div className='rounded-full h-12 w-12 items-center justify-center flex bg-sky-800'>
          <PiStudent className='text-2xl text-white ' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-400 font-light '>Total Students</span>
          <div className='flex items-center '>
            <strong className='text-xl text-gray-700 font-semibold'>{totalStudents}+</strong>
          </div>
        </div>
      </BorderWraper>

      <BorderWraper>
      <div className='rounded-full h-12 w-12 items-center justify-center flex bg-sky-500'>
          <FaSchool className='text-2xl text-white ' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-400 font-light '>Total Institutions</span>
          <div className='flex items-center '>
            <strong className='text-xl text-gray-700 font-semibold'>{totalUniversity}</strong>
            <span className='text-sm text-green-500 pl-2'>+</span>
          </div>
        </div>
      </BorderWraper>

      <BorderWraper>
        <div className='rounded-full h-12 w-12 items-center justify-center flex bg-blue-600'>
          <PiStudent className='text-2xl text-white ' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-400 font-light'>Male Students</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>{maleStudents}</strong>
          </div>
        </div>
      </BorderWraper>

      <BorderWraper>
        <div className='rounded-full h-12 w-12 items-center justify-center flex bg-pink-600'>
          <PiStudent className='text-2xl text-white ' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-400 font-light'>Female Students</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>{femaleStudents}</strong>
          </div>
        </div>
      </BorderWraper>

    </div>
  )
}

export default DashboardStart
function BorderWraper({ children }) {
  return (
    <div className='bg-white p-4 flex-1 gap-4 flex border border-gray-200 rounded-lg  items-center'> {children} </div>
  )
}