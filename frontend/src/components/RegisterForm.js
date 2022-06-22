import React from "react";
import {useForm} from "react-hook-form"
function RegisterForm() {
  const {register, handleSubmit} = useForm()
  return (
    <div>
      <h1>Register</h1>
      <form action="/register" method="POST">
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label for="name">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label for="name">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
