import React from 'react'
import { Main } from '../components/dashboard/Main'
import { SideBar } from '../components/dashboard/SideBar'

export const UserDashboard = () => {
  return (
    <div className='w-full h-screen flex'>
        <SideBar />
        <Main name={"An"}/>
    </div>
  )
}
