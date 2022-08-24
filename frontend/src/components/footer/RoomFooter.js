import React from "react";
import { DisplaySvg } from "../displaySvg/DisplaySvg";
import bluePencil from "../../assets/svg/bluePencil.svg";
import greenPencil from "../../assets/svg/greenPencil.svg";
import redPencil from "../../assets/svg/redPencil.svg";
import yellowPencil from "../../assets/svg/yellowPencil.svg";
import pinkPencil from "../../assets/svg/pinkPencil.svg";
import eraser from "../../assets/svg/eraser.svg";
import {useState, useEffect} from 'react'
import QRCode from 'qrcode';

export const RoomFooter = (props) => {
  const { onChangeColorPicked, canvasRef} = props;
  const [src, setSrc] = useState("");


  //Cloudinary 
  
  
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
                //QRCode.toDataURL(data).then(setSrc)
                console.log(data)
                var image = new Image();
                image.src = data;
                console.log(image.outerHTML)
                var w = window.open("about: image");
                w.document.write(image.outerHTML);
                w.document.close();

                //Cloudinary 
                const API_ENDPOINT = 'https://api.cloudinary.com/v1_1/dzicvcojs/upload';
 
                const fileData = new FormData();
                fileData.append('file', data);
                fileData.append('upload_preset', 'rx60o1gn'); // upload preset
             
                fetch(API_ENDPOINT, {
                  method: 'post',
                  body: fileData
                }).then(response => response.json())
                  .then(data => console.log('Success:', data))
                  .catch(err => console.error('Error:', err));

              }).catch(e => {
                console.log(e)
              })

              
            }}
            className="bg-red-500 text-white h-[50px] px-5 rounded-md"
          >
            Download
          </button>
        </div>
        <div>
            <img src={src}></img>
        </div>
      </div>
    </div>
  );
};
