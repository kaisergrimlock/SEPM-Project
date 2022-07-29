import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
export const Menu = (props) => {
  const {isScrolled} = props
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div className="menu inline-flex justify-between text-center w-full">
      <div className={`flex justify-center w-full ${isScrolled ? "text-black" : "text-white"} text-[20px]`}>
        <ul className="text-center text-base flex">
          <li className="mx-5">
            <Link
              to="/about"
              className="hover:opacity-70 duration-300 py-5 inline-block w-full"
            >
              Our mission
            </Link>
          </li>

          <li className="mx-5">
            <Link
              to="/meeting"
              className="hover:opacity-70 duration-300 py-5 inline-block w-full"
            >
              Collaborate
            </Link>
          </li>

          <li className="mx-5">
            <Link
              to="/meeting"
              className="hover:opacity-70 duration-300 py-5 inline-block w-full"
            >
              Interpretation
            </Link>
          </li>

          <li className="mx-5">
            <Link
              to="/meeting"
              className="hover:opacity-70 duration-300 py-5 inline-block w-full"
            >
              QR
            </Link>
          </li>
        </ul>
      </div>

      <div className={`${isScrolled ? "text-black" : "text-white"} text-[20px]`}>
        <ul className="text-center text-base flex ">
          {user ? (
            <>
              <li className="mx-5">
                <Link
                  to="/"
                  className="hover:opacity-70 duration-300 py-5 inline-block w-full"
                  onClick={logoutUser}
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="mx-5">
                <Link
                  to="/login"
                  className="hover:opacity-70 duration-300 py-5 inline-block w-full"
                >
                  Login
                </Link>
              </li>
              <li className="mx-5">
                <Link
                  to="/register"
                  className="hover:opacity-70 duration-300 py-5 inline-block w-full"
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
