import React, { useState } from 'react'
import {useForm} from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("")

  const navigate = useNavigate();

  const loginHandler = async(data) => {
    try {
			await axios.post(`http://localhost:8080/login`, data).then(res => {
        localStorage.setItem("token", res.data);
			  navigate("/") ;
      });
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
  };

  return (
    <div className='border border-black py-5 px-10 rounded-lg bg-white'>
      <form action="/login" method="post" onSubmit={handleSubmit(loginHandler)}>
      <h1 className='pt-3 pb-1 text-2xl font-bold border-b-4 border-black inline-block w-fit'>Login</h1>
          <div className='my-3'>
              <label htmlFor="email" className='font-semibold'>Username: </label>
              <input type="email" id="email" name="email" required placeholder='Enter your email'/>
          </div>

          <div className='my-3'>
              <label htmlFor="password" className='font-semibold'>Password: </label>
              <input type="password" id="password" name="password" required placeholder='Enter your password'/>
          </div>

          {error && <div className='text-red-500'>{error}</div>}
          <div className='login-btn pt-3 pb-6 border-b'>
            <button type="submit" className='w-full bg-black h-[42px] text-white rounded-lg'>Login</button>
          </div>

          <p className="my-3">Don't have an account? <Link to="/register" className="text-blue-700 underline hover:opacity-50 duration-300">Sign up now</Link></p>

      </form>
    </div>
  )
}

export default LoginForm