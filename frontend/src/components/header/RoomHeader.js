import React, { useEffect, useState } from "react";
import { DisplaySvg } from "../displaySvg/DisplaySvg";
import { NavButtons } from "../room/NavButtons";
import recording from "../../assets/svg/recording.svg";
import { useParams } from "react-router";
export const RoomHeader = ({ handleImages, handleHangUp, toggleAudio, startRecording, stopRecording }) => {
  const [isRecorded, setIsRecorded] = useState(false);
  const [isMuted, setIsMuted] = useState(false); 
  const [time, setTime] = useState(0)
 
  const handleRecorded = () => {
    setIsRecorded((state) => !state);
    if (isRecorded){
      stopRecording()
    } else{
      setTime(0)
      startRecording()
    }
  };

  const handleMicrophone = () => {
    toggleAudio(isMuted);
    setIsMuted((state) => !state);
  };

  useEffect(() => {
    let interval = null;

    if (isRecorded) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isRecorded) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRecorded])

  const { meetingRoomId } = useParams();

  return (
    <header className="bg-navy flex items-center py-3 px-5 justify-between text-white">
      <span className="flex gap-4 items-center">
        {" "}
        {isRecorded ? (
          <DisplaySvg children={recording} note="recording" />
        ) : (
          ""
        )}

        <div>
          {
            isRecorded ? 
              <>
                <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
              </>
            :
            "00:00:00"
          }
        </div>
        
      </span>
      <span className="sm:block hidden mx-5">
        Meeting room - ({meetingRoomId})
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
