import React, { useEffect, useState } from 'react'
import RegisterForm from '../components/RegisterForm'

function Register() {
  return (
    <div className='w-full h-screen flex justify-center items-center sm:px-0 px-5'>
        <RegisterForm/>
    </div>
  )
}

export default Register