import React from "react";
import { DisplaySvg } from "../displaySvg/DisplaySvg";
import bluePencil from "../../assets/svg/bluePencil.svg";
import greenPencil from "../../assets/svg/greenPencil.svg";
import redPencil from "../../assets/svg/redPencil.svg";
import yellowPencil from "../../assets/svg/yellowPencil.svg";
import pinkPencil from "../../assets/svg/pinkPencil.svg";
import eraser from "../../assets/svg/eraser.svg";

export const RoomFooter = () => {
  return (
    <div className="bg-navy h-[12vh] m-5 flex items-center justify-center">
      <div className="flex items-center gap-8">
        <button className={``}>
          <DisplaySvg children={bluePencil} note="blue-pencil" />
        </button>
        <button className={``}>
          <DisplaySvg children={redPencil} note="red-pencil" />
        </button>

        <button className={``}>
          <DisplaySvg children={greenPencil} note="yellow-pencil" />
        </button>

        <button className={``}>
          <DisplaySvg children={yellowPencil} note="yellow-pencil" />
        </button>

        <button className={``}>
          <DisplaySvg children={pinkPencil} note="pink-pencil" />
        </button>

        <button className={``}>
          <DisplaySvg children={eraser} note="eraser" />
        </button>
      </div>
    </div>
  );
};
