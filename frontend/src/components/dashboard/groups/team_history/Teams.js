import React from 'react'
import { Link } from 'react-router-dom'
import { TeamBlock } from './TeamBlock'

export const Teams = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-between items-center'>
        <h1 className='mx-5 font-semibold text-[20px]'>Your teams</h1>
        <Link to={'/dashboard'} className='hover:opacity-70 duration-300 py-5 inline-flex justify-center items-center w-[100px] h-[50px] rounded-md bg-red-500 text-white mx-5'>View All</Link>
      </div>
        
        <div className='mx-5 p-5 flex gap-10 w-full flex-wrap h-auto'>
          <TeamBlock name={'Bach Mai'} />
          <TeamBlock name={'Cho Ray'} />
          <TeamBlock name={'Hoa Hao'} />
          <TeamBlock name={'Hoi Chan 5'} />
          <TeamBlock name={'1A'} />
          <TeamBlock name={'Hoan My'} />
        </div>
    </div>
  )
}
