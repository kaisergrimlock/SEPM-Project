import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
export const PhoneMenu = (props) => {
  let { user, logoutUser } = useContext(AuthContext);
  const { isClicked } = props;
  return (
    <aside className="aside">
      <div
        id="sidebar-menu"
        className={`w-full h-screen ${
          isClicked
            ? "translate-x-0 opacity-1 bg-black/30"
            : "translate-x-full opacity-0"
        }  duration-300 flex justify-end`}
      >
        <div className="w-1/2 border-l border-l-black block  bg-lightGray">
          <ul className="text-center text-base text-black">
            <li>
              <Link
                to="/about"
                className="hover:opacity-50 duration-300 py-5 block w-full"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/meeting"
                className="hover:opacity-50 duration-300 py-5 block w-full"
              >
                Meeting
              </Link>
            </li>

            {user ? (
              <>
                <li>
                  <Link
                    to="/"
                    className="hover:opacity-50 duration-300 py-5 block w-full"
                    onClick={logoutUser}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="hover:opacity-50 duration-300 py-5 block w-full"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="hover:opacity-50 duration-300 py-5 block w-full"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </aside>
  );
};
