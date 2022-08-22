import React, { useContext } from "react";
import { DisplaySvg } from "../displaySvg/DisplaySvg";
import teamLogo from "../../assets/svg/teamLogo.svg";
import { Info } from "./Info";
import { ButtonList } from "./button_list/ButtonList";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export const SideBar = () => {
  let { logoutUser } = useContext(AuthContext);

  return (
    <aside>
      <div className={`w-[235px] h-screen bg-navy`}>
        <div className="p-5">
          <Link to="/">
            <DisplaySvg children={teamLogo} note={"undefined"} />
          </Link>
          <Info name={"An"} info={"A handsome doctor"} />
        </div>
        <ButtonList />

        <div className="flex justify-center my-5">
          <Link
            to="/"
            className="hover:opacity-70 duration-300 py-5 inline-flex justify-center items-center w-[150px] h-[50px] rounded-md bg-red-500 text-white"
            onClick={logoutUser}
          >
            Logout
          </Link>
        </div>
      </div>
    </aside>
  );
};
