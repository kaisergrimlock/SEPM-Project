import React from 'react'
import { Footer } from '../components/Footer'
import Header from '../components/Header'

function Home() {
  return (
    <>
        <Header />
        <main className='main my-20 w-full h-[500vh]'>
          Home
        </main> 
        <Footer />
    </>
  )
}

export default Home