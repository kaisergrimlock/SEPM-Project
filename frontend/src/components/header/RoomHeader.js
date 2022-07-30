import React, { useState } from 'react'
import { DisplaySvg } from '../displaySvg/DisplaySvg'
import { NavButtons } from '../room/NavButtons'
import recording from "../../assets/svg/recording.svg"
export const RoomHeader = (props) => {
  const {handleImages} = props
  const [isRecorded, setIsRecorded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleRecorded = () => {
    setIsRecorded(state => !state)
  }

  const handleMicrophone = () => {
    setIsMuted(state => !state)
  }

  return (
    <header className="bg-navy flex items-center py-3 px-5 justify-between text-white">
        <span className="flex gap-4 items-center"> {isRecorded ? <DisplaySvg children={recording} note="recording"/> : ''} 00:00:00 </span>
        <span className="sm:block hidden mx-5">Meeting room - (room ID)</span>
        <NavButtons isRecorded={isRecorded} isMuted={isMuted} handleRecorded={handleRecorded} handleMicrophone={handleMicrophone} handleImages={handleImages}/>
    </header>
  )
}
