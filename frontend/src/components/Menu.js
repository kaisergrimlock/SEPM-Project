import React from "react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="menu hidden sm:inline-flex justify-between w-full">
      <ul className="text-center text-base">
        <li className="mx-3">
          <Link
            to="/about"
            className="link link-underline link-underline-black py-5 inline-block w-full"
          >
            About
          </Link>
        </li>
      </ul>
      <ul className="text-center text-base sm:flex">
        <li className="mx-3">
          <Link
            to="/login"
            className="link link-underline link-underline-black text-black py-5 inline-block w-full"
          >
            Login
          </Link>
        </li>
        <li className="mx-3">
          <Link
            to="/register"
            className="link link-underline link-underline-black py-5 inline-block w-full"
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
