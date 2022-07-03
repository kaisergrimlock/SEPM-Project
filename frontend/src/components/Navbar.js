import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
function Navbar() {
  const changeNavBackground = () => {
    if (window.scrollY > 0) {
      document.getElementById("desktop-navbar").style.backgroundColor = "white";
    } else {
      document.getElementById("desktop-navbar").style.backgroundColor ="transparent";
    }
  };

  window.addEventListener("scroll", changeNavBackground);

  return (
    <nav className="navbar sm:flex justify-between text-lg py-0 fixed w-full hidden duration-300" id="desktop-navbar">
      <div className="logo px-5">
        <Link to="/">
          <img src="" alt="logo" />
        </Link>
      </div>

      <Menu />
    </nav>
  );
}

export default Navbar;
