import React from "react";
import { ImageBlock } from "./ImageBlock";
import xray from '../../../../assets/images/xray.png'
import { Link } from "react-router-dom";
export const Images = () => {
  return (
    <div>
      <div className="w-full">
        <div className='flex justify-between items-center'>
            <h1 className="mx-5 font-semibol text-[20px]">Your images</h1>
            <Link to={'/dashboard'} className='hover:opacity-70 duration-300 py-5 inline-flex justify-center items-center w-[100px] h-[50px] rounded-md bg-red-500 text-white mx-5'>View All</Link>
        </div>
        <div className="mx-5 p-5 flex gap-10 w-full flex-wrap h-auto">
            <ImageBlock src={xray}/>
            <ImageBlock src={xray}/>
            <ImageBlock src={xray}/>
            <ImageBlock src={xray}/>
        </div>
      </div>
    </div>
  );
};
