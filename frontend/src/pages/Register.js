import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'

function Register() {
    const [users, setUsers] = useState([])
    const onAddUser = (user) => {
        setUsers([...users, user])
    }
  return (
    <div>
        <h1>Register</h1>
        <RegisterForm onAddUser={onAddUser}/>
    </div>
  )
}

export default Register