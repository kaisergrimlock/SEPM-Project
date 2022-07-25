import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const registerHandler = async (data) => {
    console.log(data);
    setUser({
      ...user,
      name: data.name,
      email: data.email,
      password: data.password,
    });
    const { name, email, password } = data;
    const registerNewUser = { name, email, password };
    try {
      await axios
        .post(`http://localhost:5000/auth/register`, registerNewUser)
        .then((res) => {
          console.log(res);
          if (res.data.code === 0) {
            setUser({
              ...user,
              name: data.name,
              email: data.email,
              password: data.password,
            });
            navigate("/login");
          }
        });
    } catch (err) {
      // Handler when register not successfully
      console.log(err.response.data.errMessage);
      setError(err.response.data.errMessage);
    }
  };

  const registerValidation = {
    name: {
      required: "* Name is required",
      maxLength: {
        value: 10,
        message: "* Name length must be lower than 10",
      },
      pattern: {
        value: /^[A-Za-z]+$/,
        message: "* Invalid name",
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
    <div className="border border-black px-1 rounded-[15px] bg-navy w-[750px] h-auto">
      <form
        action="/register"
        method="POST"
        onSubmit={handleSubmit(registerHandler)}
        className="px-5 py-3"
      >
        <h1 className=" mt-3 mx-5 pb-1 border-b-2 border-white inline-block w-fit text-[48px] font-semibold text-white">
          Register
        </h1>

        <p className="text-white m-5">Join us for free</p>

        <div className="my-3">
          <label htmlFor="name" className="text-white/50 mx-5">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="E.g: An"
            {...register("name", registerValidation.name)}
            className="rounded-[50px]"
          />
          <span className="text-red-500 mx-5 my-2">
            {errors.name && errors.name.message}
          </span>
        </div>

        <div className="my-3">
          <label htmlFor="email" className="text-white/50 mx-5">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E.g: example@gmail.com"
            {...register("email", registerValidation.email)}
            className="rounded-[50px]"
          />
          <span className="text-red-500 mx-5 my-2">
            {errors.email && errors.email.message}
          </span>
        </div>

        <div className="my-3">
          <label htmlFor="password" className="text-white/50 mx-5">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            {...register("password", registerValidation.password)}
            className="rounded-[50px]"
          />
          <span className="text-red-500 mx-5 my-2">
            {errors.password && errors.password.message}
          </span>
        </div>

        {error && <p className="text-red-500 mx-5 my-2">{error}</p>}

        <div className="pt-3 pb-6 border-b border-white/80">
          <button
            type="submit"
            className=" bg-cyan text-white w-full h-[50px] rounded-[50px] font-semibold"
          >
            Register
          </button>
        </div>

        <p className="mt-3 mb-6 text-white">
          Have an account?{" "}
          <Link
            to="/login"
            className="text-cyan underline hover:opacity-80 duration-300 px-2"
          >
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};
