import React from 'react'
import { Link } from 'react-router-dom'
import DashboardStart from './DashboardStart'
import TransactionChart from './Enrollment'
import GenderChart from './GenderChart'
import StudentData from './StudentData'
const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4 '>
      {/* <DashboardStart/>
      <div className='flex flex-row gap-4 w-full'>
      <TransactionChart/>
      <GenderChart/>
      </div>
      <div className='flex flex-row gap-4 w-full'>
        <StudentData/>
      </div> */}
      <h2>hello</h2>
    </div>
  )
}

export default Dashboard