import React from "react";
import { Link } from "react-router-dom";
function Menu() {

  const changePage = () => {
    document.getElementById("body").style.backgroundColor = "rgb(110 231 183)"
  }

  return (
    <div className="menu hidden sm:inline-flex justify-between w-full">
      <ul className="text-center text-base">
        <li className="mx-3">
          <Link
            to="/about"
            className="link link-underline link-underline-black py-5 inline-block w-full"
            onClick={changePage}
          >
            About
          </Link>
        </li>
      </ul>
      <ul className="text-center text-base sm:flex">
        <li className="mx-3">
          <Link
            to="/login"
            onClick={changePage}

            className="link link-underline link-underline-black text-black py-5 inline-block w-full"
          >
            Login
          </Link>
        </li>
        <li className="mx-3">
          <Link
            to="/register"
            onClick={changePage}
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
