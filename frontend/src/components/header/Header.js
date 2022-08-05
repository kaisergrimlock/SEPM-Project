import React, {useState}  from 'react'
import { DisplaySvg } from '../displaySvg/DisplaySvg'
import { Navbar } from '../navbar/Navbar'
import { PhoneNavbar } from '../navbar/PhoneNavbar'
import advertisement from "../../assets/svg/advertisement.svg"
import { CreateRoom } from '../../views/CreateRoom'
export const Header = () => {
  const [createRoom, setCreateRoom] = useState(false)

  const handleCollaboration = () => {
    setCreateRoom(true)
  }

  const handleClosed = () => {
    setCreateRoom(false)
  }
  return (
    <>
      <header className='md:hidden block'>
        <PhoneNavbar handleCollaboration={handleCollaboration}/>
        <CreateRoom handleClosed ={handleClosed} createRoom={createRoom}/>
        <DisplaySvg children={advertisement} note="undefined"/>
      </header>  

      <header className='hidden md:block'>
        <Navbar handleCollaboration={handleCollaboration}/>
        <CreateRoom handleClosed ={handleClosed} createRoom={createRoom}/>
        <DisplaySvg children={advertisement} note="undefined"/>
      </header>
    </>
  )
}
