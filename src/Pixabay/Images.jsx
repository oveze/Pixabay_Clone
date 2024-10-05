import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";
import './Images.css'

const Images = () => {
  const { imageData } = useContext(PixabayContext);

  return (
    <div className="container my-5">
      <div className="pink">
        {imageData.map((image) => (
          <div key={image.id}>
            <div className="pinkl">
              <img src={image.largeImageURL} alt="altbalaji" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;