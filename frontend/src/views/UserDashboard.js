import React, { useContext } from 'react'
import { Main } from '../components/dashboard/Main'
import { SideBar } from '../components/dashboard/SideBar'
import AuthContext from '../context/AuthContext'

export const UserDashboard = () => {
  const {name} = useContext(AuthContext)
  return (
    <div className='w-full h-screen flex'>
        <SideBar name={name}/>
        <Main name={name}/>
    </div>
  )
}
