import React from 'react'

export const DisplaySvg = ({children, note}) => {
  return (
    <div>
        <img src={children} alt={note}/>
    </div>
  )
}
