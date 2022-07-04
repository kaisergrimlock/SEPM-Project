import React,{useState} from "react";
import { Link } from "react-router-dom";
function SidebarMenu() {
  const [mainContent, setMainContent] = useState(document.getElementById("body"))

  const changePage = () => {
    mainContent.style.backgroundColor = "rgb(110 231 183)"
  }
  return (
    <aside className="aside sm:hidden block">
      <div id="sidebar-menu" className="w-1/2 h-screen absolute top-16 right-0 border-l border-l-black block my-1.5 translate-x-full opacity-0 duration-300 bg-white">
        <ul className="text-center text-base">
          <li>
            <Link
              to="/about"
              onClick={changePage}
              className="hover:bg-black hover:text-white duration-300 py-5 block w-full"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/login"
              onClick={changePage}
              className="hover:bg-black hover:text-white duration-300 text-black py-5 block w-full"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              onClick={changePage}
              className="hover:bg-black hover:text-white duration-300 py-5 block w-full"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SidebarMenu;
