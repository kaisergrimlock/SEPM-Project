import React from 'react'
import { DisplaySvg } from '../displaySvg/DisplaySvg'

export const IntroBlock = ({src, title, content}) => {
  return (
    <div className={`w-[300px] h-auto bg-white p-10 lg:m-0 mb-10 mx-auto`}>
        <DisplaySvg children={src} note="undefined" />
        <h1 className="font-semibold my-5">{title}</h1>
        <span className="text-lightBrown text-[14px]">{content}</span>
    </div>
  )
}
