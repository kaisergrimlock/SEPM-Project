import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const registerHandler = (data) => {
    console.log(data);
  };

  const registerValidation = {
    name: {
      required: "* Name is required",
      maxLength: {
        value: 10,
        message: "* Name length must be lower than 10",
      },
    },
    email: {
      required: "* Email is required",
      pattern: {
        value:
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "* Invalid email",
      },
    },
    password: {
      required: "* Password is required",
      minLength: {
        value: 8,
        message: "* Password must have at least 8 characters",
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        message: "* Invalid password",
      },
    },
  };

  return (
    <div className="sm:w-1/2 w-full h-auto border border-black rounded-md">
      <form
        action="/register"
        method="POST"
        onSubmit={handleSubmit(registerHandler)}
        className="px-5 py-3"
      >
        <h1 className=" font-bold pt-3 pb-1 text-2xl inline-block border-b-4 border-black">Register</h1>

        <div className="my-3">
          <label htmlFor="name" className=" font-semibold">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="E.g: An"
            {...register("name", registerValidation.name)}
          />
          <span className="text-red-500">{errors.name && errors.name.message}</span>
        </div>

        <div className="my-3">
          <label htmlFor="email" className=" font-semibold">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E.g: example@gmail.com"
            {...register("email", registerValidation.email)}
          />
          <span className="text-red-500">{errors.email && errors.email.message}</span>
        </div>

        <div className="my-3">
          <label htmlFor="password" className=" font-semibold">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            {...register("password", registerValidation.password)}
          />
          <span className="text-red-500">{errors.password && errors.password.message}</span>  
        </div>

        <div className="pt-3 pb-6 border-b border-gray-300">
        <button type="submit" className=" bg-black text-white w-full h-[42px] rounded-md">
          Register
        </button>
        </div>
        
        <p className="my-3">Have an account? <Link to="/login" className="text-blue-700 underline hover:opacity-50 duration-300">Log in now</Link></p>
      </form>
    </div>
  );
}

export default RegisterForm;
