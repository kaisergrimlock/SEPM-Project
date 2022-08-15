import React from "react";
import { Link } from "react-router-dom";
import { DisplaySvg } from "../displaySvg/DisplaySvg";
import teamLogo from "../../assets/svg/teamLogo.svg";
import facebook from "../../assets/svg/facebook.svg";
import outlook from "../../assets/svg/outlook.svg";
import gmail from "../../assets/svg/gmail.svg";
import linkedin from "../../assets/svg/linkedin.svg";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer w-full h-auto bg-navy md:flex justify-start text-white pt-5">
        <div>
          <div className="web-intro p-5 w-full">
            <DisplaySvg children={teamLogo} note="team-logo" />
            <p className="my-5 leading-8 text-[14px]">
              All Rights Reserved © teamflow.com
            </p>
          </div>

          <div className="location p-5 w-full">
            <h1 className="text-[22px] font-semibold">Address</h1>
            <ul className="my-5 leading-8 text-[14px]">
              <li className="my-5">
                RMIT University, District 7, HCMC, Vietnam
              </li>
            </ul>
          </div>

          <div className="social-media p-5 w-full">
            <div className={``}>
              <h1 className="text-[22px] font-semibold">Social Media</h1>
              <ul className="my-5 leading-8 text-[14px] flex">
                <li className="mr-5">
                  <Link to="/">
                    <DisplaySvg children={facebook} note="facebook" />
                  </Link>
                </li>
                <li className="mr-5">
                  <Link to="/">
                    <DisplaySvg children={linkedin} note="linkedin" />
                  </Link>
                </li>
                <li className="mr-5">
                  <Link to="/">
                    <DisplaySvg children={outlook} note="outlook" />
                  </Link>
                </li>
                <li className="mr-5">
                  <Link to="/">
                    <DisplaySvg children={gmail} note="gmail" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="support-link p-5 md:w-1/3 md:flex md:justify-center">
          <div className={``}>
            <h1 className="text-[22px] font-semibold">Product</h1>
            <ul className="my-5 leading-8 text-[14px]">
              <li className="my-5">
                <Link to="/" className="hover:opacity-50 duration-300">Product</Link>
              </li>
              <li className="my-5">
                <Link to="/" className="hover:opacity-50 duration-300">Pricing</Link>
              </li>
              <li className="my-5">
                <Link to="/" className="hover:opacity-50 duration-300">Enterprise</Link>
              </li>
              <li className="my-5">
                <Link to="/" className="hover:opacity-50 duration-300">Partners</Link>
              </li>
              <li className="my-5">
                <Link to="/" className="hover:opacity-50 duration-300">Affiliate</Link>
              </li>
              <li className="my-5">
                <Link to="/" className="hover:opacity-50 duration-300">Integrations</Link>
              </li>
              <li className="my-5">
                <Link to="/aboutus" className="hover:opacity-50 duration-300">Developers</Link>
              </li>
              <li className="my-5">
                <Link to="/aboutus" className="hover:opacity-50 duration-300">Students</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-5 md:w-1/3">
          <h1 className="text-[22px] font-semibold">Team</h1>
          <ul className="my-5 leading-8 text-[14px]">
            <li className="my-5">
              <Link to="/ourmission" className="hover:opacity-50 duration-300">About us</Link>
            </li>
            <li className="my-5">
              <Link to="/" className="hover:opacity-50 duration-300">Contact us</Link>
            </li>
            <li className="my-5">
              <Link to="/" className="hover:opacity-50 duration-300">Careers</Link>
            </li>
            <li className="my-5">
              <Link to="/" className="hover:opacity-50 duration-300">Find a Partner</Link>
            </li>
            <li className="my-5">
              <Link to="/" className="hover:opacity-50 duration-300">In the News</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
