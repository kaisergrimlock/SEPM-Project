import React from 'react'
import { CreateRoomForm } from '../components/createRoom/CreateRoomForm'

export const CreateRoom = (props) => {
  const {handleClosed, createRoom} = props
  return (
    <div>
      <CreateRoomForm handleClosed={handleClosed} createRoom={createRoom} />
    </div>
  )
}
