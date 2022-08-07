import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
export const Menu = (props) => {
  const { isScrolled, handleCollaboration } = props;
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div className="menu inline-flex justify-between text-center w-full">
      <div
        className={`flex justify-center w-full ${
          isScrolled ? "text-black" : "text-white"
        } text-[20px]`}
      >
        <ul className="text-center text-base flex">
          <li className="mx-5">
            <Link
              to="/about"
              className="hover:opacity-70 duration-300 py-5 inline-block w-full"
            >
              Our mission
            </Link>
          </li>

          {user ? (
            <>
              <li className="mx-5">
                <button
                  className="hover:opacity-70 duration-300 py-5 inline-block w-full bg-none"
                  onClick={handleCollaboration}
                >
                  Collaborate
                </button>
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
            </>
          ) : (
            <>
              <li className="mx-5">
                <Link to="/login" className="hover:opacity-70 duration-300 py-5 inline-block w-full bg-none">Collaborate</Link>
              </li>

              <li className="mx-5">
                <Link
                  to="/login"
                  className="hover:opacity-70 duration-300 py-5 inline-block w-full"
                >
                  Interpretation
                </Link>
              </li>

              <li className="mx-5">
                <Link
                  to="/login"
                  className="hover:opacity-70 duration-300 py-5 inline-block w-full"
                >
                  QR
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <div
        className={`${isScrolled ? "text-black" : "text-white"} text-[20px] flex justify-center items-center`}
      >
        <ul className="text-center text-base flex ">
          {user ? (
            <>
              <li className="mx-5">
                <Link
                  to="/"
                  className="hover:opacity-70 duration-300 py-5 inline-flex justify-center items-center w-[80px] h-[50px] rounded-md bg-red-500"
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
                  className="hover:opacity-70 duration-300 py-5 inline-flex justify-center items-center w-[80px] h-[50px] rounded-md bg-red-500"
                >
                  Login
                </Link>
              </li>
              <li className="mx-5">
                <Link
                  to="/register"
                  className="hover:opacity-70 duration-300 py-5 inline-flex justify-center items-center w-[80px] h-[50px] rounded-md bg-red-500"
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
