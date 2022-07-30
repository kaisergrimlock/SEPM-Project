import React, { useState } from "react";
import menu from "../../assets/svg/menu.svg";
import { Link } from "react-router-dom";
import { PhoneMenu } from "../menu/PhoneMenu";
import {DisplaySvg} from "../displaySvg/DisplaySvg";
import logo from "../../assets/svg/logo.svg"
export const PhoneNavbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const[isScrolled, setIsScrolled] = useState(false)

  const onClickMenu = () => {
    setIsClicked((state) => !state);
  };

  window.addEventListener("scroll", () => {
    if(window.scrollY > 0){
      setIsScrolled(true)
    } else{
      setIsScrolled(false)
    }
  })

  return (
    <nav className="navbar fixed md:hidden block w-full z-50 text-white font-avenir">
      <div id="phone-navbar">
        <div className={`phone-navbar-btn duration-300 flex justify-between text-lg py-4 w-full ${isScrolled || isClicked ? "bg-navy" : "bg-none"} items-center`}>
          <div className="logo px-5 text-5xl font-semibold">
            <Link to="/">
              <DisplaySvg children={logo} note="logo"/>
            </Link>
          </div>

          <div className={`phone-menu-btn px-5 inline-block cursor-pointer`}>
            <img src={menu} alt="menu-btn" onClick={onClickMenu} />
          </div>
        </div>

        <PhoneMenu isClicked={isClicked} />
      </div>
    </nav>
  );
};
