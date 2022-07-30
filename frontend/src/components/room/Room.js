import React, { useState } from "react";
import { RoomHeader } from "../header/RoomHeader";
// import { NavButtons } from "./NavButtons";
import { RoomContent } from "./RoomContent";

export const Room = () => {
  const [images, setImages] = useState([]);

  let [currentImage, setCurrentImage] = useState("");

  let handleImages = (e) => {
    const filePreview = URL.createObjectURL(e.target.files[0]);
    setCurrentImage(filePreview);
    setImages((prevImage) => [...prevImage, filePreview]);
    console.log(images);
  };
  return (
    <div className="w-full max-h-screen">
      <RoomHeader handleImages={handleImages} />
      <RoomContent currentImage={currentImage} images={images}/>
    </div>
  );
};
