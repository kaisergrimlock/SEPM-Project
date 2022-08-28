import React from 'react'
import { DisplaySvg } from '../../../displaySvg/DisplaySvg'
import hospital1 from '../../../../assets/svg/hospital1.svg'
export const TeamBlock = ({name}) => {
  return (
    <div className='w-[139px]'>
        <DisplaySvg children={hospital1} note='undefined' />
        <h1 className='font-semibold my-3'>{name} Hospital</h1>
    </div>
  )
}
