import React from 'react'
import { DevelopersList } from '../components/developer/DevelopersList'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import advertisement2 from "../assets/svg/advertisement2.svg"
export const AboutUs = () => {
  return (
    <div className='font-avenir'>
        <Header image={advertisement2}/>
        <main className=''>
            <h1 className='text-center font-semibold text-[48px] my-3'>About us</h1>
            <span className='text-center w-full inline-block mb-3 text-[20px]'>Meeting our developers building the website</span>
            <DevelopersList />
        </main>
        <Footer />
    </div>
  )
}
