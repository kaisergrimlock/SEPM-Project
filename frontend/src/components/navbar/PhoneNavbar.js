import React, { useState } from "react";
import menu from "../../assets/svg/menu.svg";
import { Link } from "react-router-dom";
import { PhoneMenu } from "../menu/PhoneMenu";
export const PhoneNavbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const onClickMenu = () => {
    setIsClicked((state) => !state);
  };
  return (
    <nav className="navbar fixed sm:hidden block w-full z-50 text-white font-avenir">
      <div id="phone-navbar">
        <div className="phone-navbar-btn flex justify-between text-lg py-4 w-full bg-darkBlue items-center">
          <div className="logo px-5 text-5xl font-semibold">
            <Link to="/">RaD</Link>
          </div>

          <div className="phone-menu-btn px-5 inline-block cursor-pointer">
            <img src={menu} alt="menu-btn" onClick={onClickMenu} />
          </div>
        </div>

        <PhoneMenu isClicked={isClicked} />
      </div>
    </nav>
  );
};
