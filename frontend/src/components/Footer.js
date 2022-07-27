import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate()

    const navigateToAbout = () => {
        navigate("/about")
    }
  return (
    <footer className="footer-container">
      <div className="footer w-full h-auto bg-white sm:flex justify-start">
        <div className="web-intro p-5 w-full">
          <h1 className="text-3xl font-bold">XaD</h1>
          <p className="my-5 leading-8">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...{" "}
          </p>
          <button className="w-fit bg-black text-white my-5 p-3 rounded-md" onClick={navigateToAbout}>Read more</button>
        </div>

        <div className="location p-5 w-full">
          <h1 className="text-3xl font-bold">Location</h1>
          <p className="my-5 leading-8">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum{" "}
          </p>
        </div>

        <div className="suppor-link p-5 w-full">
          <h1 className="text-3xl font-bold">Support</h1>
          <p className="my-5 leading-8">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum{" "}
          </p>
        </div>

        <div className="open-time p-5 w-full">
          <h1 className="text-3xl font-bold">
            Opening Hours
          </h1>
          <ul className="my-5 leading-8">
            <li className="my-5">From Monday to Saturday: 07:00 AM - 10:00PM</li>

            <li className="my-5">Sunday: 12:00 PM - 19:00PM</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
