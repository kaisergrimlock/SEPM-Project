import React from 'react'
import { DisplaySvg } from '../displaySvg/DisplaySvg'
import ava from '../../assets/svg/user.svg'
export const Info = ({name, info}) => {
  return (
    <div className="text-center my-[40px]">
        <div className='w-full flex justify-center'>
            <DisplaySvg children={ava} note={"undefined"}/>
        </div>

        <div className='my-5'>
            <h1 className='text-white font-semibold'>{name}</h1>
            <p className='text-white/40'>{info}</p>
        </div>
        
    </div>
  )
}
