import React from 'react'
import { Images } from './groups/image_history/Images'
import { Teams } from './groups/team_history/Teams'

export const Main = ({name}) => {
  return (
    <>
        <div className='w-full h-screen overflow-hidden'>
            <h1 className={'font-semibold text-[32px] mx-5 my-3'}>Good Afternoon, doctor {name}</h1>
            <Teams />
            <Images />
        </div>
    </>
  )
}
