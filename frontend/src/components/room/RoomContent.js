import React, { useRef } from "react";
import { RoomFooter } from "../footer/RoomFooter";
import { ImageList } from "./ImageList";
import { User } from "./User";
import { Whiteboard } from "./Whiteboard";
// import upload from "../../assets/svg/upload.svg";
// import { DisplaySvg } from "../displaySvg/DisplaySvg";

export const RoomContent = (props) => {
  const { images, currentImage, handleClickedImage, colorPicked, onChangeColorPicked} = props;
  const canvasRef = useRef(null)

  return (
    <div className="flex w-full h-auto ">
      <ImageList images={images} handleClickedImage={handleClickedImage} />

      <div className="w-full h-[92vh] overflow-hidden">
        <Whiteboard canvasRef={canvasRef} image={currentImage} colorPicked={colorPicked}/>

        <RoomFooter canvasRef={canvasRef} onChangeColorPicked ={onChangeColorPicked}/>
      </div>

      <div className="w-1/5 h-[92vh] bg-lightBlack overflow-y-scroll ">
        <User username={"User1"} talk="bg-navy/40" />
        <User username={"User2"} talk="bg-none" />
        <User username={"User2"} talk="bg-none" />
        <User username={"User2"} talk="bg-none" />
        <User username={"User2"} talk="bg-none" />
        <User username={"User2"} talk="bg-none" />
        <User username={"User2"} talk="bg-none" />
        <User username={"User2"} talk="bg-none" />
        <User username={"User2"} talk="bg-none" />
      </div>
    </div>
  );
};
