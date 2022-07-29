import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let {loginUser, user, error} = useContext(AuthContext)

  const [error, setError] = useState("");

  const loginValidation = {
    email: {
      required: "* Email is required",
    },
    password: {
      required: "* Password is required",
    },
  };

  return (
    <div className="border border-black px-5 py-3 rounded-[15px] bg-navy w-[750px] h-auto">
      <form action="/login" method="post" onSubmit={handleSubmit(loginUser)}>
        <h1 className="mt-3 mx-5 pb-1 border-b-2 border-white inline-block w-fit text-[48px] font-semibold text-white">
          Login
        </h1>

        <p className="text-white m-5">Together, we will save more lives</p>

        <div className="">
          <label htmlFor="email" className="text-white/50 mx-5">
            Username:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", loginValidation.email)}
            placeholder="Enter your email"
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
            {...register("password", loginValidation.password)}
            className="rounded-[50px]"
            placeholder="Enter your password"
          />
          <span className="text-red-500 mx-5 my-2">
            {errors.password && errors.password.message}
          </span>
        </div>

        {error && <div className="text-red-500 mx-5 my-3">* {error}</div>}

        <div className="login-btn mt-6 pb-6 border-b border-white/80">
          <button
            type="submit"
            className="w-full bg-cyan h-[50px] font-semibold text-white rounded-[50px]"
          >
            Login
          </button>
        </div>

        <p className="mt-3 mb-8 text-white">
          Don't have an account?
          <Link
            to="/register"
            className="text-cyan underline hover:opacity-50 duration-300 px-2"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};
