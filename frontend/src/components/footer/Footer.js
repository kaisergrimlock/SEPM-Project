import React from 'react'
import {useNavigate } from "react-router-dom";
export const Footer = () => {
    const navigate = useNavigate()

    const navigateToAbout = () => {
        navigate("/about")
    }
  return (
    <footer className="footer-container">
      <div className="footer w-full h-auto bg-darkBlue md:flex justify-start text-white">
        <div className="web-intro p-5 w-full">
          <h1 className="text-3xl font-bold">RaD</h1>
          <p className="my-5 leading-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...{" "}
          </p>
          <button className="bg-cyan text-white w-[160px] h-[50px] rounded-md text-center active:opacity-70" onClick={navigateToAbout}>Read more</button>
        </div>

        <div className="location p-5 w-full">
          <h1 className="text-3xl font-bold">Location</h1>
          <ul className="my-5 leading-8 list-disc mx-3.5">
            <li className="my-5"><span>HCM: </span>702 Nguyen Van Linh, Ward Tan Phong, District 7</li>
          </ul>
        </div>

        <div className="suppor-link p-5 w-full">
          <h1 className="text-3xl font-bold">Support</h1>
          <ul className="my-5 leading-8 list-disc mx-3.5">
            <li className="my-5">FAQ</li>
            <li className="my-5">Resources</li>
            <li className="my-5">Copyright</li>
            <li className="my-5">Term of Service</li>
            <li className="my-5">Privacy Policy</li>
          </ul>
        </div>

        <div className="p-5 w-full">
          <h1 className="text-3xl font-bold">
            Contact
          </h1>
          <ul className="my-5 leading-8 list-disc mx-3.5">
            <li className="my-5"><span>Outlook: </span>medhead@rmit.edu.vn</li>
            <li className="my-5"><span>Gmail: </span>medhead@gmail.com</li>
            <li className="my-5"><span>Phone: </span>012 3456 789</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
