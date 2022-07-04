import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
function Navbar() {
  const changePage = () => {
    document.getElementById("body").style.backgroundColor = "rgb(110 231 183)"
  }
  
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
        <Link to="/" onClick={changePage}>
              <img src="" alt="logo" />
            </Link>
      </div>

      <Menu />
    </nav>
  );
}

export default Navbar;
