import React from 'react'

export const ImageBlock = ({src}) => {
  return (
    <div className='w-[200px] h-[300px] rounded-[10px]'>
        <img src={src} alt="undefined" className='object-cover w-full h-full rounded-[9px]' />
    </div>
  )
}
