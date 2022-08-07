import React, { useState } from "react";
import { RoomFooter } from "../footer/RoomFooter";
import { ImageList } from "./ImageList";
import { User } from "./User";
// import upload from "../../assets/svg/upload.svg";
// import { DisplaySvg } from "../displaySvg/DisplaySvg";

export const RoomContent = (props) => {
  const { images, currentImage, handleClickedImage } = props;
  return (
    <div className="flex w-full h-auto ">
      <ImageList images={images} handleClickedImage={handleClickedImage}/>

      <div className="w-full h-[92vh]">
        <div className="w-full h-[75vh]">
          {currentImage ? <img src={currentImage} className="w-full h-full object-scale-down aspect-auto" /> : ""}
        </div>
        <RoomFooter />
      </div>

      <div className="w-1/5 h-[92vh] bg-lightBlack overflow-y-scroll">
        <User username={"User1"} talk="bg-navy/40"/>
        <User username={"User2"} talk="bg-none"/>
        <User username={"User2"} talk="bg-none"/>
        <User username={"User2"} talk="bg-none"/>
        <User username={"User2"} talk="bg-none"/>
        <User username={"User2"} talk="bg-none"/>
        <User username={"User2"} talk="bg-none"/>
        <User username={"User2"} talk="bg-none"/>
        <User username={"User2"} talk="bg-none"/>
      </div>
    </div>
  );
};
