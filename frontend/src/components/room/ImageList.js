import React from 'react'

export const ImageList = (props) => {
  const { images, handleClickedImage } = props;

  return (
    <div className="w-1/5 h-[92vh] bg-lightBlack overflow-y-auto">
        {images
          ? images.map((image, index) => {
              return (
                <div key={index} id={index} onClick={() => handleClickedImage(index)} className={`hover:opacity-70 duration-300`}>
                  <div className="flex justify-center items-center w-full h-[15vh] p-3">
                    <img src={image} className="w-full h-full object-contain" />
                  </div>
                  
                  <span className="text-center inline-block w-full text-white font-medium">{index + 1}</span>
                </div>
              );
            })
          : ""}
    </div>
  )
}
