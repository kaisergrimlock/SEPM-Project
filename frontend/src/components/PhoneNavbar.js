import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarMenu from "./SidebarMenu";
function PhoneNavbar() {
  let [menuBtn, setMenuBtn] = useState(0);

  const changePage = () => {
    document.getElementById("body").style.backgroundColor = "rgb(110 231 183)"
  }

  const handleDisplayMenu = () => {
    menuBtn++;
    setMenuBtn(menuBtn);
    const sidebarMenu = document.getElementById("sidebar-menu");
    const mainContent = document.getElementById("body")

    if (menuBtn % 2 !== 0) {
      sidebarMenu.style.transform = "translateX(0)";
      sidebarMenu.style.opacity = "1";
      mainContent.style.backgroundColor = "rgb(64 64 64)"
    } else {
      sidebarMenu.style.transform = "translateX(100%)";
      sidebarMenu.style.opacity = "0";
      mainContent.style.backgroundColor = "rgb(110 231 183)"
    }
  };

  return (
    <nav className="navbar fixed sm:hidden block w-full">
      <div id="phone-navbar">
        <div className="phone-navbar-btn flex justify-between text-lg py-5 w-full bg-white border-b-2 border-b-black">
          <div className="logo px-5">
            <Link to="/" onClick={changePage}>
              <img src="" alt="logo" />
            </Link>
          </div>

          <div className="phone-menu-btn px-5 inline-block cursor-pointer">
            <FontAwesomeIcon icon={faBars} onClick={handleDisplayMenu} />
          </div>
        </div>

        <SidebarMenu />
      </div>
    </nav>
  );
}

export default PhoneNavbar;
