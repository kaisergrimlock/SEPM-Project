import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
export const PhoneMenu = (props) => {
  let { user, logoutUser } = useContext(AuthContext);
  const { isClicked, handleCollaboration } = props;
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
        <div className="w-1/2 border-l border-l-black block bg-lightGray">
          <ul className="text-center text-base text-black">
            {user ? (
              <>
                <li>
                  <Link
                    to="/about"
                    className="hover:opacity-50 duration-300 py-5 block w-full"
                  >
                    Our misson
                  </Link>
                </li>

                <li>
                  <button
                    className="hover:opacity-50 duration-300 py-5 block w-full bg-none"
                    onClick={handleCollaboration}
                  >
                    Collaborate
                  </button>
                </li>

                <li>
                  <Link
                    to="/"
                    className="hover:opacity-50 duration-300 py-5 block w-full"
                  >
                    Interpretation
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="hover:opacity-50 duration-300 py-5 block w-full"
                  >
                    QR
                  </Link>
                </li>
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
                    to="/about"
                    className="hover:opacity-50 duration-300 py-5 block w-full"
                  >
                    Our misson
                  </Link>
                </li>

                <li>
                  <Link
                    className="hover:opacity-50 duration-300 py-5 block w-full bg-none"
                    to="/login"
                  >
                    Collaborate
                  </Link>
                </li>

                <li>
                  <Link
                    to="/login"
                    className="hover:opacity-50 duration-300 py-5 block w-full"
                  >
                    Interpretation
                  </Link>
                </li>

                <li>
                  <Link
                    to="/login"
                    className="hover:opacity-50 duration-300 py-5 block w-full"
                  >
                    QR
                  </Link>
                </li>
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
