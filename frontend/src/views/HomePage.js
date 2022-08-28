import React from "react";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { IntroBlock } from "../components/introBlock/IntroBlock";
import heart from "../assets/svg/heart.svg";
import stethoscope from "../assets/svg/stethoscope.svg";
import doctorList from "../assets/svg/doctorList.svg";
import advertisement from "../assets/svg/advertisement.svg"

export const HomePage = () => {
  return (
    <>
      <Header image={advertisement}/>
      <main className="main bg-lightBlue2 w-full">
        <h1 className="text-center text-[48px] py-5 font-semibold">
          What you <span className="text-red-500">can do?</span>
        </h1>
        <div className="lg:flex lg:justify-around lg:pb-10 p-10">
          <IntroBlock
            src={heart}
            title="Real-time Collaboration"
            content="The gradual accumulation of 
information about atomic and 
small-scale behaviour..."
          />
          <IntroBlock
            src={stethoscope}
            title="Image Interpretation"
            content="The gradual accumulation of 
information about atomic and 
small-scale behaviour..."
          />
          <IntroBlock
            src={doctorList}
            title="Report Generation"
            content="The gradual accumulation of 
information about atomic and 
small-scale behaviour..."
          />
        </div>   
      </main>
      <Footer />
    </>
  );
};
