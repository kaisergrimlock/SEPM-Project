import React from 'react'
import { DeveloperCard } from './DeveloperCard'
import an from '../../assets/images/an.JPG'
export const DevelopersList = () => {
  return (
    <div className='flex justify-center mt-5 mb-10 mx-10 gap-4'>
        <DeveloperCard image={an} name={"Bui Quang An"} education={"IT Sophomore at RMIT University"} role={"Frontend Developer"}/>
        <DeveloperCard image={an} name={"Nguyen Cuong Anh Minh"} education={"IT Sophomore at RMIT University"} role={"Fullstack Developer"}/>
        <DeveloperCard image={an} name={"Vo Nguyen Khoi"} education={"IT Sophomore at RMIT University"} role={"Fullstack Developer"}/>
        <DeveloperCard image={an} name={"Nguyen Chau Loan"} education={"IT Sophomore at RMIT University"} role={"Backend Developer"}/>
    </div>
  )
}
