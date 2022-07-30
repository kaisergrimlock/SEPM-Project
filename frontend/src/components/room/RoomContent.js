import React, { useState } from "react";
import { User } from "./User";
// import upload from "../../assets/svg/upload.svg";
// import { DisplaySvg } from "../displaySvg/DisplaySvg";

export const RoomContent = (props) => {
  const { images, currentImage } = props;
  return (
    <div className="flex w-full h-screen bg-lightBlue2">
      <div className="w-1/5 h-auto">
        {images
          ? images.map((image, index) => {
              return (
                <div className="text-center">
                  <img src={image} className="" />
                  <span className="text-center inline-block w-full py-2">{index + 1}</span>
                </div>
              );
            })
          : ""}
      </div>
      <div className="bg-black w-full h-auto">
        {currentImage ? <img src={currentImage} className="" /> : ""}
      </div>

      <div className="w-1/5 h-auto">
        <User />
      </div>
    </div>
  );
};
