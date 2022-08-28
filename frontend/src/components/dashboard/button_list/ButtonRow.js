import React from 'react'
import { useNavigate } from 'react-router'
import { DisplaySvg } from '../../displaySvg/DisplaySvg'

export const ButtonRow = ({icon, title, path}) => {
    const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center cursor-pointer px-5' onClick={() => navigate(path)}>
        <DisplaySvg children={icon} note="undefined" />
        <h1 className='font-semibold mx-3 text-white'>{title}</h1>
    </div>
  )
}
