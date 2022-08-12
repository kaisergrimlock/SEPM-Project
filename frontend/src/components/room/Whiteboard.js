import React from "react";
import { ReactSketchCanvas } from 'react-sketch-canvas';

export const Whiteboard = ({canvasRef, image, colorPicked }) => {
  return(
    <div className="w-full h-[75vh] flex justify-center items-center px-5 py-10 bg-black">
      <ReactSketchCanvas ref={canvasRef} strokeWidth="2" strokeColor={colorPicked} backgroundImage={image} exportWithBackgroundImage="true" eraserWidth={24}/>
    </div>
  )

};
