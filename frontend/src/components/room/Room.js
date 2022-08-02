import React, { useState } from "react";
import { RoomFooter } from "../footer/RoomFooter";
import { RoomHeader } from "../header/RoomHeader";
// import { NavButtons } from "./NavButtons";
import { RoomContent } from "./RoomContent";

export const Room = () => {
  const [images, setImages] = useState([]);

  let [currentImage, setCurrentImage] = useState("");

  // let [clickedImage, setClickedImage] = useState("")

  const handleClickedImage = (id) => {
    setCurrentImage(images[id])
    console.log(currentImage)
  }

  let handleImages = (e) => {
    const filePreview = URL.createObjectURL(e.target.files[0]);
    setCurrentImage(filePreview);
    setImages((prevImage) => [...prevImage, filePreview]);
    console.log(images);
  };
  return (
    <div className="w-full h-screen bg-lightBlue2 ">
      <RoomHeader handleImages={handleImages} />
      <RoomContent currentImage={currentImage} images={images} handleClickedImage={handleClickedImage}/>
    </div>
  );
};
