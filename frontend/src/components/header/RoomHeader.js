import React, { useState } from "react";
import { DisplaySvg } from "../displaySvg/DisplaySvg";
import { NavButtons } from "../room/NavButtons";
import recording from "../../assets/svg/recording.svg";
export const RoomHeader = (props) => {
  const { handleImages, handleHangUp, toggleAudio } = props;
  const [isRecorded, setIsRecorded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleRecorded = () => {
    setIsRecorded((state) => !state);
  };

  const handleMicrophone = () => {
    toggleAudio(isMuted);
    setIsMuted((state) => !state);
  };

  return (
    <header className="bg-navy flex items-center py-3 px-5 justify-between text-white">
      <span className="flex gap-4 items-center">
        {" "}
        {isRecorded ? (
          <DisplaySvg children={recording} note="recording" />
        ) : (
          ""
        )}{" "}
        00:00:00{" "}
      </span>
      <span className="sm:block hidden mx-5">
        Meeting room - ({props.meetingRoomId})
      </span>
      <NavButtons
        isRecorded={isRecorded}
        isMuted={isMuted}
        handleRecorded={handleRecorded}
        handleMicrophone={handleMicrophone}
        handleImages={handleImages}
        handleHangUp={handleHangUp}
      />
    </header>
  );
};
