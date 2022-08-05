import React, { useState } from "react";
import { DisplaySvg } from "../displaySvg/DisplaySvg";
import close from "../../assets/svg/close.svg";
import { useNavigate } from "react-router";
export const CreateRoomForm = (props) => {
  const { handleClosed, createRoom } = props;

  const [roomId, setRoomId] = useState("");

  const [error, setError] = useState("");

  const onChangeRoomId = (e) => {
    setRoomId(e.target.value);
  };

  const navigate = useNavigate();

  const handleRoomId = (e) => {
    e.preventDefault()
    if (roomId === "1234") {
      navigate("/meeting");
    } else{
      if(roomId.length === 0){
        setError("* Required Room ID")
      } else{
        setError("* Invalid Room ID")
      }
    }
  };

  return (
    <div
      className={`fixed bg-black bg-opacity-50 ${
        createRoom ? "flex" : "hidden"
      } justify-center w-full h-screen items-center z-50 px-5`}
    >
      <form className="w-[350px] h-fit bg-lightGray px-5 py-5 rounded-md" onSubmit={handleRoomId}>
        <div className="flex justify-end">
          <button onClick={handleClosed}>
            <DisplaySvg children={close} note="close-button" />{" "}
          </button>
        </div>

        <h1 className="font-semibold text-[24px] text-center">Enter Room ID</h1>
        <div className="flex items-center gap-2">
          <input
            type={"text"}
            placeholder="Enter room ID"
            className="w-2/3"
            value={roomId}
            onChange={onChangeRoomId}
          />
          <button
            type="submit"
            className="w-1/3 h-[50px] rounded-md bg-red-500 text-white p-2 hover:opacity-70 duration-300 text-sm"
          >
            Join Room
          </button>
        </div>
        {error ? <span className="text-red-500">{error}</span> : ""}
      </form>
    </div>
  );
};
