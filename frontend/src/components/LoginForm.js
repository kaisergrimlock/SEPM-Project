import React from 'react'
import {useForm} from "react-hook-form";
import {Link} from 'react-router-dom';
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loginHandler = (data) => {
    console.log(data);
  };

  // const loginValidation = {
  //   email: {
  //     required: "* Email is required",
  //     pattern: {
  //       value:
  //         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  //       message: "* Invalid email",
  //     },
  //   },
  //   password: {
  //     required: "* Password is required",
  //     minLength: {
  //       value: 8,
  //       message: "* Wrong password. Please check again!",
  //     },
  //     pattern: {
  //       value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  //       message: "* Invalid password",
  //     },
  //   },
  // };
  return (
    <div className='border border-black py-5 px-10 rounded-lg'>
    {/* <!--Error Message-->
    <div class="error">
        <% if(error){ %>
        <%= error %>
        <% } %>
    </div>
    <!--Login form--> */}
      <form action="/login" method="post">
      <h1 className='pt-3 pb-1 text-2xl font-bold border-b-4 border-black inline-block w-fit'>Login</h1>
          <div className='my-3'>
              <label htmlFor="email" className='font-semibold'>Username: </label>
              <input type="email" id="email" name="email" required placeholder='Enter your email'/>
          </div>

          <div className='my-3'>
              <label htmlFor="password" className='font-semibold'>Password: </label>
              <input type="password" id="password" name="password" required placeholder='Enter your password'/>
          </div>

          <div className='login-btn pt-3 pb-6 border-b'>
            <button type="submit" className='w-full bg-black h-[42px] text-white rounded-lg'>Login</button>
          </div>

          <p className="my-3">Don't have an account? <Link to="/register" className="text-blue-700 underline hover:opacity-50 duration-300">Sign up now</Link></p>

      </form>
    </div>
  )
}

export default LoginForm