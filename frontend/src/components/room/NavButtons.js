import React from "react";
import { DisplaySvg } from "../displaySvg/DisplaySvg";
import record from "../../assets/svg/record.svg";
import stop from "../../assets/svg/stop.svg";
import microphone from "../../assets/svg/microphone.svg";
import muted from "../../assets/svg/muted.svg";
import upload from "../../assets/svg/upload.svg";

export const NavButtons = (props) => {
  const {
    isMuted,
    isRecorded,
    handleRecorded,
    handleMicrophone,
    handleImages,
    handleHangUp,
  } = props;

  return (
    <div className="flex gap-4 items-center">
      <div>
        <label htmlFor="upload-image" className="image cursor-pointer">
          {" "}
          <DisplaySvg children={upload} note="Upload image" />{" "}
        </label>
        <input
          type={"file"}
          name="image"
          id="upload-image"
          className="hidden"
          onChange={(e) => handleImages(e)}
          accept="image/*"
        />
      </div>
      <button onClick={handleRecorded}>
        {isRecorded ? (
          <DisplaySvg children={stop} note="record" />
        ) : (
          <DisplaySvg children={record} note="record" />
        )}{" "}
      </button>
      <button onClick={handleMicrophone}>
        {isMuted ? (
          <DisplaySvg children={muted} note="record" />
        ) : (
          <DisplaySvg children={microphone} note="record" />
        )}
      </button>
      <button
        onClick={handleHangUp}
        className="w-[100px] h-[40px] bg-red-500 text-white rounded-[10px] inline-flex justify-center items-center hover:opacity-70 duration-300"
      >
        {" "}
        Leave{" "}
      </button>
    </div>
  );
};
