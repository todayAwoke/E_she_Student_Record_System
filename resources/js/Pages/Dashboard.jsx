import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DashboardStart from '../components/DashboardStart'
import TransactionChart from '../components/Enrollment'
import GenderChart from '../components/GenderChart'
import StudentData from '../components/StudentData'

const Dashboard = () => {
  
  return (
    <div className='flex flex-col gap-4 '>
      <DashboardStart/>
      <div className='flex flex-row gap-4 w-full'>
      <TransactionChart/>
      <GenderChart/>
      
      </div>
      <div className='flex flex-row gap-4 w-full'>
        <StudentData/>
      </div>
      <h2>hello</h2>
    </div>
  )
}

export default Dashboard