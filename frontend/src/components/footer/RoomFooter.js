import React from "react";
import { DisplaySvg } from "../displaySvg/DisplaySvg";
import bluePencil from "../../assets/svg/bluePencil.svg";
import greenPencil from "../../assets/svg/greenPencil.svg";
import redPencil from "../../assets/svg/redPencil.svg";
import yellowPencil from "../../assets/svg/yellowPencil.svg";
import pinkPencil from "../../assets/svg/pinkPencil.svg";
import eraser from "../../assets/svg/eraser.svg";

export const RoomFooter = (props) => {
  const { onChangeColorPicked, canvasRef} = props;
  
  return (
    <div className="h-[12vh] inline-flex items-center justify-center w-full my-5">
      <div className="flex items-center gap-8 bg-navy p-3">
        <div>
          <input
            type={"radio"}
            className="hidden"
            value="#6DA8D6"
            name="tool"
            id="blue"
            onChange={(e) => onChangeColorPicked(e)}
            onClick= {() => canvasRef.current.eraseMode(false)}
          />
          <label className={``} htmlFor="blue">
            <DisplaySvg children={bluePencil} note="blue-pencil" />
          </label>
        </div>

        <div>
          <input
            name="tool"
            type={"radio"}
            className="hidden"
            value="#FF0000"
            id="red"
            onChange={(e) => onChangeColorPicked(e)}
            onClick= {() => canvasRef.current.eraseMode(false)}
          />
          <label className={``} htmlFor="red">
            <DisplaySvg children={redPencil} note="red-pencil" />
          </label>
        </div>

        <div>
          <input
            name="tool"
            type={"radio"}
            className="hidden"
            value="#2ABE39"
            id="green"
            onChange={(e) => onChangeColorPicked(e)}
            onClick= {() => canvasRef.current.eraseMode(false)}
          />
          <label className={``} htmlFor="green">
            <DisplaySvg children={greenPencil} note="green-pencil" />
          </label>
        </div>

        <div>
          <input
            name="tool"
            type={"radio"}
            className="hidden"
            value="#F2DB0C"
            id="yellow"
            onChange={(e) => onChangeColorPicked(e)}
            onClick= {() => canvasRef.current.eraseMode(false)}
          />
          <label className={``} htmlFor="yellow">
            <DisplaySvg children={yellowPencil} note="yellow-pencil" />
          </label>
        </div>

        <div>
          <input
            name="tool"
            type={"radio"}
            className="hidden"
            value="#F755D3"
            id="pink"
            onChange={(e) => onChangeColorPicked(e)}
            onClick= {() => canvasRef.current.eraseMode(false)}
          />

          <label className={``} htmlFor="pink">
            <DisplaySvg children={pinkPencil} note="pink-pencil" />
          </label>
        </div>

        <div>
          <button onClick={() => canvasRef.current.eraseMode(true)}><DisplaySvg children={eraser} note="eraser" /></button>
        </div>

        <div>
          <button
            onClick={() => {
              canvasRef.current.exportImage('png').then(data => {
                console.log(data)
              }).catch(e => {
                console.log(e)
              })
            }}
            className="bg-red-500 text-white h-[50px] px-5 rounded-md"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};
