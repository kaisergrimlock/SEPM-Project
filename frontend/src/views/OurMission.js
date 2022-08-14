import React from 'react'
import { Header } from '../components/header/Header'
import advetisement2 from '../assets/svg/advertisement2.svg'
import { Footer } from '../components/footer/Footer'
import advertisement3 from '../assets/svg/advertisement3.svg'
import { DisplaySvg } from '../components/displaySvg/DisplaySvg'
export const OurMission = () => {
  return (
    <div>
        <Header image={advetisement2} />
        <main className="mx-24 md:mx-[215px] my-16">
            <p className='mb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <DisplaySvg children={advertisement3} note="undefined" />
        </main>
        <Footer />
    </div>
  )
}
